import { getProducts } from '@/lib/shopify';
import SpotlightGrid from './SpotlightGrid';

export default async function Spotlight() {
  const all = await getProducts();
  const featured = all.slice(0, 3);
  return <SpotlightGrid products={featured} />;
}
