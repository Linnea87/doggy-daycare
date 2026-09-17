export const DOG_FALLBACK_IMG = `${import.meta.env.BASE_URL}dog-icon-logo.png`;

export const getImageFallback = (img) => ({
    src: img || DOG_FALLBACK_IMG,
    isFallback: !img,
    onError: (e) => {
        e.target.onerror = null;
        e.target.src = DOG_FALLBACK_IMG;
        e.target.classList.add('img.fallback');
    }
});