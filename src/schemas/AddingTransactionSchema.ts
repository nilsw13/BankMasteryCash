import { z } from "zod";

const invalid_type_error = "Invalid type provided for this field";
const required_error = "Those fields cannot be blank";
const lenght_out_error = "More value than authorized";
const xss_error = "Input contains potentially dangerous characters";
const sql_error = "Input contains potentially malicious SQL patterns";
const invalid_option_error = "Please select a valid option";

const xssRegex = /[<>{}()\[\]'"`\\]/;
const sqlInjectionRegex =
  /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|EXEC|UNION|CREATE|WHERE)\b)|(\-\-|\/\*|\*\/|;)/i;

export const AddingTransactionSchema = z.object({
  amount: z
    .number({ invalid_type_error, required_error })
    .min(0, { message: required_error }),

  reference: z
    .string({ invalid_type_error, required_error })
    .min(1, { message: required_error })
    .max(255, { message: lenght_out_error })
    .transform((val) => val.trim())
    .refine((val) => !xssRegex.test(val), {
      message: xss_error,
    })
    .refine((val) => !sqlInjectionRegex.test(val), {
      message: sql_error,
    }),

  customer: z
    .string({ invalid_type_error, required_error })
    .min(1, { message: required_error })
    .max(255, { message: lenght_out_error })
    .transform((val) => val.trim())
    .refine((val) => !xssRegex.test(val), {
      message: xss_error,
    })
    .refine((val) => !sqlInjectionRegex.test(val), {
      message: sql_error,
    }),

  paymentMethod: z.enum(["bank_transfert", "credit_card"], {
    errorMap: () => ({ message: invalid_option_error }),
  }),

  type: z.enum(["income", "outcome"], {
    errorMap: () => ({ message: invalid_option_error }),
  }),
});

export default AddingTransactionSchema;
