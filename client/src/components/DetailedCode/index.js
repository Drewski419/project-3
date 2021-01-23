import React from "react";
import "./DetailedCode.css";
import Tag from "../Tag";
import { useState, useEffect } from "react"; 

function DetailedCode({ title, description, tags, language, updatedAt, userId }) {
    return (
        <div>
            <div className="card description-card">
                <div className="card-header">
                    {title}
                </div>
                <div className="card-body">
                    <div className="row">
                        <p className="language-info col-md-3">Language: {language}</p>
                        <p className="details-card-tags col-md-9">Tags:
                            {tags?.split(",").map((v,i) =>{
                            if(i < 4){
                                return(
                                    <Tag value={v}/>
                                )
                            }
                            })}
                        </p>
                    </div>
                    <p className="card-text">Description: {description}</p>
                </div>
                <div className="card-footer text-muted">
                    <div className="row">
                        <p className="col-md-6">Last Updated: {updatedAt}</p>
                        <p className="author-info col-md-6">Author: {userId}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailedCode;