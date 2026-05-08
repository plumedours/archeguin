import { useEffect, useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { asset } from "../utils/assets";
import { usePublicJson } from "../utils/usePublicJson";

const fallbackPhotos = [
  { src: "photos/01.jpg", alt: "Activité de tir à l’arc au club Archeguin" },
  { src: "photos/02.jpg", alt: "Archer en pratique" },
  { src: "photos/03.jpg", alt: "Cibles de tir à l’arc" },
  { src: "photos/04.jpg", alt: "Membres du club Archeguin" },
  { src: "photos/05.jpg", alt: "Séance de tir en salle" },
  { src: "photos/06.jpg", alt: "Pratique encadrée de tir à l’arc" },
  { src: "photos/07.jpg", alt: "Équipement de tir à l’arc" },
  { src: "photos/08.jpg", alt: "Salle intérieure du club" },
  { src: "photos/09.jpg", alt: "Ambiance conviviale au club" },
];

export default function Galerie() {
  const { data: photoList } = usePublicJson("data/photos.json", fallbackPhotos);
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const loaded = await Promise.all(
        photoList.map((photo) => new Promise((resolve) => {
          const src = asset(photo.src || photo);
          const img = new Image();
          img.onload = () => resolve({ src, width: img.naturalWidth || 1600, height: img.naturalHeight || 1000, alt: photo.alt || "Photo du club Archeguin" });
          img.onerror = () => resolve({ src, width: 1600, height: 1000, alt: photo.alt || "Photo du club Archeguin" });
          img.src = src;
        }))
      );
      if (!cancelled) setItems(loaded);
    }
    load();
    return () => { cancelled = true; };
  }, [photoList]);

  return (
    <section className="section-shell py-14 sm:py-20">
      <div className="grid items-end gap-6 sm:grid-cols-[1fr_auto]">
        <SectionHeading eyebrow="Galerie" title="Les activités du club en images" align="left">
          Découvrez l’ambiance du Club Archeguin à travers des photos de pratique, d’initiation et d’activités organisées au fil des saisons.
        </SectionHeading>
      </div>

      <div className="rounded-[2rem] border border-[#18372b]/10 bg-white p-3 shadow-sm sm:p-4">
        {items.length > 0 && (
          <MasonryPhotoAlbum
            photos={items}
            spacing={12}
            columns={(containerWidth) => {
              if (containerWidth < 560) return 1;
              if (containerWidth < 860) return 2;
              if (containerWidth < 1120) return 3;
              return 4;
            }}
            onClick={({ index }) => setIndex(index)}
          />
        )}
      </div>

      <Lightbox open={index >= 0} index={index} close={() => setIndex(-1)} slides={items} />
    </section>
  );
}
