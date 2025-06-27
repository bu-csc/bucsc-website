import React from 'react';
import './connector.css';

/*
rectangle-right
triangle-left
line
rectangle-left
triangle-right
long-triangle
*/

function Connector({type}) {
    if (type === "rectangle-right") {
        return (
            <div className="connector-rec">
                <div className="rec-1"></div>
                <div className="rec-2"></div>
                <div className="rec-3"></div>
                <div className="rec-4"></div>
                <div className="rec-5"></div>
            </div>
        );
    }

    if (type === "rectangle-left") {
        return (
            <div className="connector flip-horizontal">
                <div className="rec-1"></div>
                <div className="rec-2"></div>
                <div className="rec-3"></div>
                <div className="rec-4"></div>
                <div className="rec-5"></div>
            </div>
        );
    }

    if (type === "line") {
        return (
            <div className="connector-line">
                <div className="line"></div>
                <div className="line-btn"></div>
            </div>
        );
    }

    if (type === "triangle-left") {
        return (
            <div className="connector-tri">
                <div className="tri-1"></div>
                <div className="tri-2"></div>
                <div className="tri-line">
                    <div className="connector-line">
                        <div className="line"></div>
                        <div className="line-btn"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "triangle-right") {
        return (
            <div className="connector-tri flip-horizontal">
                <div className="tri-1"></div>
                <div className="tri-2"></div>
                <div className="tri-line">
                    <div className="connector-line">
                        <div className="line"></div>
                        <div className="line-btn"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "long-triangle") {
        return (
            <div className="connector-long-tri">
                <div className="long-tri-1"></div>
                <div className="long-tri-2"></div>
                <div className="long-tri-3"></div>
                <div className="long-tri-4"></div>
            </div>
        );
    }
   
    return null;
}

export default Connector;