import textContent from './data/textContentData';

class TextContentApi {
    static getAmmaContent() {
        return textContent.ammaContent;
    }

    static getDignityMealsContent() {
        return textContent.dignityMealsContent;
    }

    static getAbundantLifeContent() {
        return textContent.abundantLifeContent;
    }

    static getAboutContent() {
        return textContent.aboutContent;
    }
}

export default TextContentApi;