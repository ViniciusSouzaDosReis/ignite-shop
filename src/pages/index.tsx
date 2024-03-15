import { styled } from "../../styles"
import { HomeContainer, Product } from "../../styles/pages/home"
import Image from "next/future/image"
import camiseta1 from '../assets/camisetas/+PLUS-T-shirttransparente 1.png'
import camiseta2 from '../assets/camisetas/2_explorer-t-shirt 1.png'


export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
