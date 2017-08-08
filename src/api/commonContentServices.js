import commonContent from './data/commonContentData';

class CommonContentApi {
    static getHeaderNavItems() {
        return commonContent.headerNavItems;
    }

    static getHeaderLogo() {
        return commonContent.headerLogo;
    }

    static getFooterIcons() {
        return commonContent.footerIcons;
    }
}

export default CommonContentApi;