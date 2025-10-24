import { useEffect, useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import photos from "../data/photos";
import { asset } from "../utils/assets";

export default function Galerie() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const loaded = await Promise.all(
        photos.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.onload = () =>
                resolve({ src: asset(src), width: img.naturalWidth || 1600, height: img.naturalHeight || 900 });
              img.onerror = () => resolve({ src: asset(src), width: 1600, height: 900 });
              img.src = asset(src);
            })
        )
      );
      if (!cancelled) setItems(loaded);
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto p-8">
      <h1 className="text-5xl font-bold text-[#111827] mb-8 text-center">Galerie</h1>

      <MasonryPhotoAlbum
        photos={items}
        spacing={8}
        columns={(containerWidth) => {
          if (containerWidth < 600) return 2;
          if (containerWidth < 900) return 3;
          return 4;
        }}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={items}
      />
    </section>
  );
}
