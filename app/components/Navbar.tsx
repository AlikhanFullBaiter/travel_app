'use client'
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<nav className='flexBetween max-container padding-container relative z-30 py-5'>
			<Link href='/'>
				<Image src='/hilink-logo.svg' alt='logo' width={74} height={29} />
			</Link>

			<ul className='hidden h-full gap-12 lg:flex'>
				{NAV_LINKS.map(link => (
					<Link
						href={link.href}
						key={link.key}
						className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
					>
						{link.label}
					</Link>
				))}
			</ul>

			<div className='lg:flexCenter hidden'>
				<Button
					type='button'
					title='Login'
					icon='/user.svg'
					variant='btn_dark_green'
				/>
			</div>

			{/* Burger menu icon */}
			<Image
				src='/menu.svg'
				alt='menu'
				width={32}
				height={32}
				className='inline-block cursor-pointer lg:hidden'
				onClick={toggleMenu}
			/>

			<div
				className={`absolute top-16 right-0 z-20 w-full bg-white shadow-lg p-5 flex flex-col gap-4 transition-transform duration-500 ease-in-out ${
					isMenuOpen
						? 'transform translate-y-0 opacity-100'
						: 'transform -translate-y-5 opacity-0 pointer-events-none'
				}`}
			>
				<ul className='flex flex-col gap-4'>
					{NAV_LINKS.map(link => (
						<Link
							href={link.href}
							key={link.key}
							className='regular-16 text-gray-900 cursor-pointer transition-all hover:font-bold'
							onClick={toggleMenu}
						>
							{link.label}
						</Link>
					))}
				</ul>
				<Button
					type='button'
					title='Login'
					icon='/user.svg'
					variant='btn_dark_green'
				/>
			</div>
		</nav>
	)
}

export default Navbar
