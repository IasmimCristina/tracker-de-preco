"use client"

import React, { useState, FormEvent } from 'react'

// Check
const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;
    // Check if has amazon.com or similar
    if (
      hostname.includes('amazon.com') ||
      hostname.includes('amazon.') ||
      hostname.endsWith('amazon')
    ) {
      return true;
    }


  } catch (error) {
    return false;

  }

  return false;


}


const Searchbar = () => {

  const [searchPrompt, setSearchPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    const IsValidLink = isValidAmazonProductURL(searchPrompt);

    if (!IsValidLink) return alert('Por favor, digite um link Amazon válido!')




    try {
      setIsLoading(true);
      // Scrape product
    } catch (error) {
      console.log(error)
    } finally {

      setIsLoading(false);


    }
  }
  return (
    <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>


      <input type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}

        className="searchbar-input" placeholder='Digite o link do produto' />

      <button
        disabled={searchPrompt === ''}
        className='searchbar-btn' type='submit'>

        {isLoading ? 'Procurando...' : 'Procurar'}
      </button>

    </form>
  )
}

export default Searchbar