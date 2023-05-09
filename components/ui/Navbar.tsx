import React from 'react'
import { Navbar, Button, Link, Text, Card, Radio, Spacer } from "@nextui-org/react"
import Image from "next/image"

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
        <Text h2>P</Text>
        <Text h3>ókemon</Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Text>Favoritos</Text>
      </Navbar.Content>
    </Navbar>
  )
}
