import commonContent from './data/commonContentData';

class CommonContentApi {
    static getHeaderNavItems() {
        return commonContent.headerNavItems;
    }

    static getFooterIcons() {
        return commonContent.footerIcons;
    }
}

export default CommonContentApi;