import { Navbar, Link, Text, } from "@nextui-org/react"
import Image from "next/image"
import NextLink from 'next/link'

export const NavBarDefault = () => {
  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Logo"
          width={70}
          height={70}
        />
        <NextLink href='/' passHref legacyBehavior>
          <Link>
            <Text h2>P</Text>
            <Text h3>ókemon</Text>
          </Link>
        </NextLink>
      </Navbar.Brand>
      <Navbar.Content>
        <Link href='/favorites'>
          <Text color="white">Favoritos</Text>
        </Link>
      </Navbar.Content>
    </Navbar>
  )
}
