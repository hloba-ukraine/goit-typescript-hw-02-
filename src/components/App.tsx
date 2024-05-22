import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { useEffect, useState, FormEvent } from "react";
import axios from "axios";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import ImageModal from "./ImageModal/ImageModal";
interface data {
  id: string;
  urls: {
    id: string;
    regular: string;
    small: string;
  };
  alt_description: string;
}
export default function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<data[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [regularSrc, setRegularSrc] = useState<string>("");
  const options = {
    per_page: 12,
    page: page,
  };

  const instance = axios.create({
    baseURL: "https://api.unsplash.com/search",
  });
  const API_KEY = "s87vf_i1heNu3dltJw-UXqI5GjUEBWPN_NCltfneOgc";

  useEffect(() => {
    if (query.length === 0) return;

    const fetchPhotos = async (): Promise<void> => {
      try {
        setLoader(true);
        const { data } = await instance.get(
          `/photos/?client_id=${API_KEY}&query=${query}`,
          {
            params: options,
          }
        );

        const img: data[] = data.results;
        console.log(img);

        setImages((prevImages) => {
          if (prevImages === null) {
            return [...img];
          } else {
            return [...prevImages, ...img];
          }
        });

        console.log(images);
      } catch (error) {
        setErrorMessage(true);
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    fetchPhotos();
  }, [query, page]);
  const handleSearch = (q: string): void => {
    setQuery(q);
    setImages([]);
    setPage(1);
  };
  const handleLoadMore = (): void => {
    setPage(page + 1);
  };
  const onClickOpen = (url: string): void => {
    setRegularSrc(url);
    setModalOpen(true);
    console.log(regularSrc);
  };
  const onClose = (): void => {
    setModalOpen(false);
  };
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      {loader === true && <Loader />}
      {errorMessage === true && <ErrorMessage />}
      {Array.isArray(images) && (
        <ImageGallery onClickOpen={onClickOpen} dataCard={images} />
      )}
      {Array.isArray(images) && images.length > 0 && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalOpen}
        onCloseModal={onClose}
        image={regularSrc}
      />
    </>
  );
}
