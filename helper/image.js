const DYNAMIC_IMAGE_HOST = "https://my-og-image-thanks-to-vercel.vercel.app"; //no slash
const LOGO_URL = "https://upier.t-ps.net/images/upier.svg";

export default function metadataImage(text, fontsize) {
    if (!fontsize) fontsize = 50;
    return `${DYNAMIC_IMAGE_HOST}/${text}.png?theme=light&md=1&fontSize=${fontsize}px&widths=800&heights=350&images=${LOGO_URL}`;
}