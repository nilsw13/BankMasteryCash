import { z } from "zod";

const invalid_type_error = "Invalid type provided for this field";
const required_error = "Those fields cannot be blank";
const lenght_out_error = "Exceed max value";
const xss_error = "Input contains potentially dangerous characters";
const sql_error = "Input contains potentially malicious SQL patterns";

const xssRegex = /[<>{}()\[\]'"`\\]/;
const sqlInjectionRegex =
  /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|EXEC|UNION|CREATE|WHERE)\b)|(\-\-|\/\*|\*\/|;)/i;

const AddingSavingSchema = z.object({
  amount: z
    .number({ invalid_type_error, required_error })
    .min(1, { message: invalid_type_error }),

  name: z
    .string({ invalid_type_error, required_error })
    .min(1, { message: required_error })
    .max(255)
    .transform((val) => val.trim())
    .refine((val) => !sqlInjectionRegex.test(val), {
      message: sql_error,
    })
    .refine((val) => !xssRegex.test(val), {
      message: xss_error,
    }),

  rate: z
    .number({ invalid_type_error, required_error })
    .refine((val) => val >= 0.1, {
      message: "Rate must be at least 0.1%",
    }),
});

export default AddingSavingSchema;
