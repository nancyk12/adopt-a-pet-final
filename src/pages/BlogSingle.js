import React from "react";
import { Link } from "react-router-dom"

function BlogSingle(){
 return(
<>
 <h1>Scrimba learn React Router 6 Nested Routes, 19 Back to all vans</h1>
 <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back Blog List</span></Link>

            <div className="blog-single-layout-container">
                <div className="blog-single">
                    <img src="images/pet-photo-shoot.jpeg" />
                    <div className="blog-single-info-text">
                        <i
                            className={`van-type van-type-`}
                        >
                           
                        </i>
                        <h3>Title: Greyson Frazier adopts Petunia</h3>
                        <h4>Text: Greyson Frazier, the beloved instructor at Code Immersives, has adopted Petunia, a pot-bellied pig from the Oklahoma City Animal Shelter. We wish Greyson and Petunia years of happiness.</h4>
                    </div>
                </div>
            </div>
        </section>

</>

 )    


}
export default BlogSingle;

