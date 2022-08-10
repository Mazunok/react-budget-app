import { createContext, FC, ReactNode, useContext, useState } from "react";

interface IExpence {
  body: string;
  cost: number;
  id: number;
}

interface IExpencesContext {
  expences: IExpence[];
}

const ExpencesContext = createContext<IExpencesContext>({
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

export const useExpenceContext = () =>
  useContext<IExpencesContext>(ExpencesContext);

export const ExpencesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ExpencesContext.Provider value={useExpencesValue()}>
      {children}
    </ExpencesContext.Provider>
  );
};
