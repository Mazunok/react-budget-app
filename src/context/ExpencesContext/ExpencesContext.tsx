import { createContext, FC, ReactNode, useState } from "react";

interface IExpence {
  body: string;
  cost: number;
  id: number;
}

interface IExpencesContext {
  expences: IExpence[];
}

export const ExpencesContext = createContext<IExpencesContext>({
  expences: [],
});

const useExpencesValue = () => {
  const [expencesContext, setExpencesContext] = useState<IExpencesContext>(
    () => {
      return {
        expences: [
          {
            id: 3,
            body: "playstation 3",
            cost: 100,
          },
        ],
      };
    }
  );
  return expencesContext;
};

export const ExpencesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ExpencesContext.Provider value={useExpencesValue()}>
      {children}
    </ExpencesContext.Provider>
  );
};
