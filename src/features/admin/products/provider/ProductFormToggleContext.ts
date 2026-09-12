"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type FormAction = "add" | "edit";

type ProductFormContextType = {
  action: FormAction;
  OpenProductForm: (form: FormAction) => void;
  CloseProductForm: () => void;
  isOpen: boolean;
};

const ProductFormContext = createContext<ProductFormContextType>({
  action: "add",
  OpenProductForm: () => {},
  CloseProductForm: () => {},
  isOpen: false,
});

export const ProductFormProvider = ({ children }: { children: ReactNode }) => {
  const [action, setAction] = useState<FormAction>("add");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const OpenProductForm = (form: FormAction) => {
    setAction(form);
    setIsOpen(true);
  };
  const CloseProductForm = () => setIsOpen(false);

  return React.createElement(
    ProductFormContext.Provider,
    {
      value: {
        action,
        OpenProductForm,
        CloseProductForm,
        isOpen,
      },
    },
    children,
  );
};

export const useProductFormToggle = () => useContext(ProductFormContext);
