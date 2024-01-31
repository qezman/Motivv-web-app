import React, { Component } from 'react'
import ExplorePage from '../components/Explore';
import ExploreList from '../components/ExploreList';
import Helmet from '../components/Helmet'

export class Explore extends Component {
    render() {
        return (
            <>
                <Helmet page="explore" title="Explore talents" />
                <Helmet 
                    page="explore" 
                    title="Explore talents" 
                    description="Choose vetted designer, Recommended designers and Premium designers available, Motivv | Explore page"
                />
                <ExplorePage />
                <ExploreList />
            </>
        )
    }
}

export default Explore
