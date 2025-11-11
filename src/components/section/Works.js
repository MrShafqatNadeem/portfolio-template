import React, { useState } from 'react'
import Project from '../layouts/Project'
import { projects, section3Title } from '../../profile'

const Works = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <div data-aos="zoom-in-up" data-aos-once="true" className="third">
            <>
                <div className="pp-head-line mx-auto text-center">
                    <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                </div>
            </>
            <div className="row">
                {displayedProjects && displayedProjects.map((x) =>
                    <Project
                        key={x.id}
                        id={x.id}
                        url={x.url}
                        name={x.name}
                        skills={x.skills}
                        androidUrl={x.androidUrl}
                        iosUrl={x.iosUrl}
                        downloads={x.downloads}
                        category={x.category}
                        rating={x.rating}
                    />
                )}
            </div>

            {projects.length > 3 && (
                <div className="text-center" style={{ marginTop: '2rem' }}>
                    <button
                        className="see-more-btn"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? 'Show Less' : `See More Projects (${projects.length - 3})`}
                    </button>
                </div>
            )}
        </div>
    )
}

export default Works
