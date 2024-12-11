declare module '@metamask/jazzicon' {
  export default function jazzicon(
    diameter: number, // Dimensione dell'avatar in pixel
    seed: number, // Seed univoco per generare l'avatar
  ): HTMLElement; // Restituisce un elemento HTML (solitamente un <div>)
}
