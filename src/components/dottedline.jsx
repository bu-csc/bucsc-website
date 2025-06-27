import React from 'react';

function DottedLine({ reverse, gibby, footer }) {
    const classNames = ['dotted-line'];
    if (footer) classNames.push('footer');
    if (reverse) classNames.push('reverse');
    if (gibby) classNames.push('gibby');
    return (
        <>
            <style>{`
                .dotted-line {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    width: 70%;
                    height: 18px;
                    margin: 0.5rem 0.75rem 0;
                }
                .rectangle {
                    width: 80%;
                    height: 8px;
                    background-color: var(--darkblue);
                    margin-right: 1.25rem;
                }

                .dots {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 0.5rem;
                    width: auto;
                    height: 100%;
                }
                .dot {
                    height: 95%;
                    width: 20%;
                    aspect-ratio: 1.125 / 1;
                    border-radius: 50%;
                    background-color: var(--darkblue);
                }
                .reverse {
                    transform: rotateY(180deg);
                    margin: 0 0.75rem 0.5rem;
                    align-self: flex-end;
                }
                
                .gibby .rectangle,
                .gibby .dot {
                    background-color: var(--gibby-blue);
                }

                .footer{
                    width: 30%;
                }
            `}</style>
            <div className={classNames.join(' ')}>
                <div className="rectangle"></div>
                <div className="dots">{Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="dot"></div>
                ))}
                </div>
            </div>
        </>
    );
}

export default DottedLine;