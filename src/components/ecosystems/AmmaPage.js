import React from 'react';
import TextContentApi from '../../api/textContentServices';
import Article from './Article';

class AmmaPage extends React.Component {
    constructor(context) {
        super(context);

        this.state = {
            articleItems: []
        }
    }

    componentWillMount() {
        const articleItems = TextContentApi.getAmmaContent();

        this.setState({
            articleItems: articleItems
        });
    }

    render() {
        return (
            <Article articleItems={this.state.articleItems} />
        );
    }
}

export default AmmaPage;
