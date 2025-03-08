import { Button } from "@/components/ui/button";
import { SavingAccountDto, useSavingAccount } from "@/hooks/use-savingAccount";
import { TransactionPostDto, useTransaction } from "@/hooks/use-transactions";
import { LoaderCircle, PlusIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface AddingModaleProps {
  variant: "transaction" | "saving account";
}

function AddingModale({ variant }: AddingModaleProps) {
  const { addNewTransaction, addingError, isAdding  } = useTransaction();
  const { newSavincAccount, savingAddingError, isSavingAdding } =
    useSavingAccount();


  const [shake, setShake] = useState(false);

  const [transactionFormData, setTransactionFormData] =
    useState<TransactionPostDto>({
      amount: 0,
      reference: "",
      customer: "Nilsw13",
      paymentMethod: "credit_card",
      type: "income",
    });

  const [savingFormData, setSavingFormData] = useState<SavingAccountDto>({
    amount: 0,
    name: "",
    rate: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    if (variant === "transaction") {
      const { name, value } = e.target;
      setTransactionFormData((prev) => ({
        ...prev,
        [name]:
          name === "amount" || name === "rate" ? parseFloat(value) || 0 : value,
      }));
    } else {
      const { name, value } = e.target;
      setSavingFormData((prev) => ({
        ...prev,
        [name]:
          name === "amount" || name === "rate" ? parseFloat(value) || 0 : value,
      }));
    }
  };

  const resetFormState = () => {
   
     
    if (variant === "transaction") {
      setTransactionFormData({
        amount: 0,
        reference: "",
        customer: "Nilsw13",
        paymentMethod: "credit_card",
        type: "income",
      });
    }
    setSavingFormData({
      amount: 0,
      name: "",
      rate: 0,
    });

    setTimeout(()=> window.location.href = '#', 2000)
    

  };

  const renderTransacFields = () => {
    return (
      <div className="grid text-white gap-4 w-full">
        <label className="font-bold text-secondary text-xl">Reference</label>
        <input
          onChange={handleChange}
          name="reference"
          value={transactionFormData.reference}
          type="text"
          className="rounded-lg p-2 bg-slate-800 text-blue-300 font-bold"
          placeholder="Netflix, Mcdonalds.."
        />

        <label
          htmlFor="paymentMethod"
          className="font-bold text-secondary text-xl"
        >
          Paiment method
        </label>
        <select
          onChange={handleChange}
          required
          value={transactionFormData.paymentMethod}
          name="paymentMethod"
          id="paymentMethod"
          className="bg-slate-800 text-blue-300 font-bold rounded-lg p-2"
        >
          <option value="bank_transfert">Bank transfert</option>
          <option value="credit_card">Credit card</option>
        </select>

        <label className="font-bold text-secondary text-xl">
          Income ? Outcome ?
        </label>
        <select
          onChange={handleChange}
          required
          value={transactionFormData.type}
          name="type"
          id="type"
          className="bg-slate-800 text-blue-300 font-bold rounded-lg p-2"
        >
          <option value="income">Income</option>
          <option value="outcome">Outcome</option>
        </select>
      </div>
    );
  };

  const renderSavingFields = () => {
    return (
      <div className="grid text-white gap-4 w-full">
        <label className="font-bold text-secondary text-xl">Name</label>
        <input
          onChange={handleChange}
          name="name"
          value={savingFormData.name}
          type="text"
          className="rounded-lg p-2 bg-slate-800 text-blue-300 font-bold"
          placeholder="Real estate, Techs assets.."
        />

        <label className="font-bold text-secondary text-xl">Rate</label>
        <input
          type="number"
          step={0.1}
          className="rounded-lg p-2 bg-slate-800 text-blue-300 font-bold"
        />
      </div>
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    
    if (variant === "transaction") {
      e.preventDefault();
      const transactionHasErrors =
        transactionFormData.amount < 0 || !transactionFormData.reference.trim();
      if (transactionHasErrors) {
        setShake(true);
        toast.error("Error while adding transaction")
        setTimeout(() => setShake(false), 500);
        
        return;
      }
      console.log("submitted transaction", transactionFormData);

      
      addNewTransaction(transactionFormData);

      
      

    } else {
      e.preventDefault();
      const savingHasErrors =
        savingFormData.amount < 0 ||
        savingFormData.rate < 0 ||
        !savingFormData.name.trim();
      if (savingHasErrors) {
        setShake(true);
        toast.error("Error while adding saving account")
        setTimeout(() => setShake(false), 500);
        return;
      }

      console.log("submitted saving account", savingFormData);
      newSavincAccount(savingFormData);
      
    }

      resetFormState()

    
  };

  

  return (
    <div>
      <div className="text-sm flex items-center text-white">
        <a href={`${variant === "transaction" ? "#maModale" : "#maModale2"}`}>
          {variant === "transaction" ? (
            <Button className="p-2 mr-10 w-10 h-10 bg-blue-500/20 hover:bg-blue-500/30 cursor-pointer rounded-full">
              <PlusIcon className="text-blue-500" />
            </Button>
          ) : (
            <PlusIcon className="w-8 h-8 border-2 rounded-sm p-1 bg-blue-900/20  hover:bg-blue-900/20  border-white/20 text-blue-600" />
          )}
        </a>
      </div>

      <div
        id={`${variant === "transaction" ? "maModale" : "maModale2"}`}
        className={`fixed z-10 inset-0 bg-black/80 flex items-center justify-center opacity-0 invisible target:opacity-100 target:visible transition-opacity duration-300 ease-in-out `}
      >
        <motion.div
          animate={
            shake
              ? {
                  x: [0, -10, 10, -10, 10, -5, 5, 0],
                }
              : { x: 0 }
          }
          transition={{ duration: 0.5 }}
          style={shake ? { border: "2px solid #FCA5A5" } : {}}
          className={`w-auto pl-10 pr-10  bg-slate-800/70 h-auto m-4 p-4 rounded-lg md:w-fit  `}
        >
          <div className="flex flex-col items-center space-y-5 w-full ">
            <a href="#" className="relative md:left-[48%]">
              <Button className=" bg-red-300 text-slate-800 hover:bg-rose-400">
                <XIcon />
              </Button>
            </a>
            <form onSubmit={handleSubmit}>
              <h2 className="text-secondary mb-10 font-bold text-2xl">
                Add new {variant}
              </h2>

              <div className="grid text-white gap-4 w-full">
                <label className="font-bold text-secondary text-xl">
                  Amount
                </label>
                <input
                  onChange={handleChange}
                  name="amount"
                  value={`${
                    variant === "transaction"
                      ? transactionFormData.amount
                      : savingFormData.amount
                  }`}
                  type="number"
                  className="rounded-lg p-2 bg-slate-800 text-blue-300 font-bold"
                />

                {variant === "transaction"
                  ? renderTransacFields()
                  : renderSavingFields()}
              </div>

              <div className="flex gap-2 mt-4 w-full">
                <a href="#" className="w-full ">
                  <Button
                    className={`bg-green-300 text-slate-800 hover:bg-green-400 w-full mb-4  `}
                    disabled={isAdding || isSavingAdding}
                    type="submit"
                  >
                    {isAdding || isSavingAdding  ? <LoaderCircle className="animate-spin transition-all"/> : "Submit"}

                  </Button>

                  
                </a>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AddingModale;
