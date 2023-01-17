import { useState } from "react"
import { X } from "phosphor-react"
import { RotateButton } from "./RotateButton"
import { useDocumentTitle } from "../../hooks/useDocument"
import { productsForCard } from "../../data/products"

interface ProductCardProps {
  productCode: number
}

export function ProductCard({ productCode }: ProductCardProps) {
  const [isRotating, setIsRotating] = useState<boolean>(false)

  const selectedProduct = productsForCard.find(
    (product) => product.id === productCode
  )

  useDocumentTitle("Product card")

  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center bg-[#1e1e1e]">
      {selectedProduct !== undefined ? (
        <div className="m-auto flex h-[498px] w-[875px] flex-col items-center gap-[13px] rounded-[9.6px] bg-[#d9cdf7] py-7 md:flex-row md:py-0">
          <div className="relative">
            <button
              className="absolute top-2 right-[50px] cursor-pointer"
              onClick={() => setIsRotating(!isRotating)}
            >
              {isRotating ? <X size={28} /> : <RotateButton />}
            </button>
            {isRotating ? (
              <img
                className="w-[449px]"
                src={selectedProduct.productImageRotate}
                alt={`${selectedProduct.title} rotating"`}
              />
            ) : (
              <img
                className="w-[449px]"
                src={selectedProduct.productImage}
                alt={selectedProduct.title}
              />
            )}
          </div>

          <div>
            <div className="flex flex-col gap-3">
              <span className="font-lato text-[10px] font-light uppercase leading-[100%] text-[#271a45]">
                Código: {selectedProduct.id}
              </span>
              <h2 className="m-0 font-crimson text-[32px] font-semibold leading-8 text-[#271a45]">
                {selectedProduct.title}
              </h2>
              <p className="m-0 font-lato text-base leading-[100%] text-[#271a45] opacity-[0.67]">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(selectedProduct.price)}
              </p>
            </div>
            <button className="mt-5 cursor-pointer rounded-full px-4 py-2 text-center font-lato text-xs uppercase leading-4 outline outline-1 outline-[#271a45] transition-colors duration-300 hover:bg-[#271a45] hover:text-[#d9cdf7]">
              Adicionar à cesta
            </button>
          </div>
        </div>
      ) : (
        <h2 className="font-lato text-3xl text-white">
          Desculpe, não foi possível encontrar o produto.
        </h2>
      )}
    </div>
  )
}
