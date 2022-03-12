import React from 'react';  
import "../../styles/components/sidebar.scss";
import { Link, NavLink } from 'react-router-dom';
import Horse from "../../../public/images/horse.png";

export const Sidebar = () => (
    <div className="sidebar">
        <div className='inner'>
            <div className='logo'>
                <Link to={`/`}>
                    <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 130 80">
                        <g>
                            <path d="M73.15,46.4c-1.96,0-3.5,1.17-4.29,2.9c-0.41-1.77-1.5-3.16-3.65-3.16c-2.03,0-3.61,1.28-4.51,3.23
                                c0-1.54,0.08-2.71,0.08-2.71c-2.41,0-4.14-0.04-4.14-0.04c0.11,10.49,0.11,17.97,0.11,17.97c2.41-0.04,5.04-0.04,5.04-0.04
                                s-0.15-6.43-0.11-10.87c0-1.69,0.56-3.05,1.58-3.05c0.79,0,1.05,0.79,1.05,2.14c0.08,4.66-0.04,11.39-0.04,11.39
                                c2.71-0.04,5.11-0.04,5.11-0.04s-0.08-5.68,0-10.64c0-1.62,0.45-2.78,1.5-2.78c0.71,0,0.98,0.68,1.02,1.99
                                c0.08,5.53,0.11,13.01,0.11,13.01c3.27-0.04,4.96,0,4.96,0s0.04-7.93-0.08-14.29C76.87,48.54,75.89,46.4,73.15,46.4z">
                            </path>
                            <path d="M85.26,61.96c-1.13,0-1.65-1.39-1.77-4.74c4.96-0.08,8.2-0.11,8.2-0.11c0.38-6.28-1.05-11.05-6.54-11.05
                                c-4.93,0-6.81,4.17-6.81,9.55c0,5.71,1.47,9.96,6.88,9.96c3.76,0,6.2-2.56,6.62-6.88c-2.52-0.08-5.08-0.11-5.08-0.11
                                C86.68,60.87,86.2,61.96,85.26,61.96z M85.1,49.41c1.05,0,1.47,1.77,1.43,4.81c-1.05,0.04-2.03,0.08-3.05,0.08
                                C83.6,51.06,84.05,49.41,85.1,49.41z">
                            </path>
                            <path d="M109.85,46.93c-1.96,0-3.46,1.13-4.29,2.82c-0.38-1.84-1.47-3.27-3.65-3.27c-2.03,0-3.61,1.28-4.51,3.23
                                c0-1.47,0.08-2.52,0.08-2.52c-2.41,0-4.14-0.04-4.14-0.04c0.11,10.49,0.11,17.75,0.11,17.75c2.41-0.04,5.04,0,5.04,0
                                s-0.15-6.39-0.11-10.87c0-1.69,0.56-3.05,1.58-3.05c0.79,0,1.05,0.79,1.05,2.14c0.08,4.66-0.04,12.22-0.04,12.22
                                c2.71,0,5.11-0.04,5.11-0.04s-0.08-6.35,0-11.32c0-1.62,0.45-2.78,1.5-2.78c0.71,0,0.98,0.71,1.02,1.99
                                c0.08,5.53,0.11,11.69,0.11,11.69c3.27-0.04,4.96,0,4.96,0s0.04-6.62-0.08-12.97C113.57,49.07,112.59,46.93,109.85,46.93z">
                            </path>
                            <path d="M123.46,58.84c-0.08,2.29-0.56,3.01-1.5,3.01c-1.09,0-1.62-1.05-1.77-4.1c4.96-0.08,8.2-0.11,8.2-0.11
                                c0.38-6.47-1.13-10.94-6.54-10.94c-4.85,0-6.81,4.02-6.81,9.17c0,6.58,2.26,9.59,6.88,9.59c4.06,0,6.24-2.71,6.58-6.2
                                C125.71,59.11,123.46,58.84,123.46,58.84z M121.8,50.05c0.94,0,1.47,0.83,1.43,4.7c-1.05,0.04-2.03,0.08-3.05,0.08
                                C120.26,51.47,120.71,50.05,121.8,50.05z">
                            </path>
                        </g>
                        <polygon points="112.95,35.15 114.02,34.08 113.31,33.37 112.24,34.44 111.65,33.26 110.76,33.71 111.37,34.93 110,35.23 
                            110.21,36.21 111.55,35.92 111.43,37.3 112.42,37.39 112.54,36.07 113.7,36.66 114.16,35.77 ">
                        </polygon>
                        <polygon points="124.88,21.09 125.95,20.02 125.25,19.31 124.18,20.38 123.59,19.2 122.7,19.64 123.31,20.87 121.94,21.16 
                            122.15,22.14 123.49,21.85 123.37,23.24 124.36,23.33 124.48,22 125.64,22.6 126.1,21.7 ">
                        </polygon>
                        <circle cx="118.6" cy="28.44" r="1.28">
                        </circle>
                        <g>
                            <path d="M84.78,30.22c-1.39,0-2.52-1.13-2.52-2.52s1.13-2.52,2.52-2.52s2.52,1.13,2.52,2.52S86.17,30.22,84.78,30.22z M84.78,26.17
                                c-0.84,0-1.52,0.68-1.52,1.52c0,0.84,0.68,1.52,1.52,1.52c0.84,0,1.52-0.68,1.52-1.52C86.3,26.85,85.62,26.17,84.78,26.17z">
                            </path>
                        </g>
                            <circle cx="80.07" cy="23.45" r="1.2"></circle>
                        <g>
                        <path d="M61.85,35.7c-1.33,0-2.41-1.08-2.41-2.41s1.08-2.41,2.41-2.41s2.41,1.08,2.41,2.41S63.18,35.7,61.85,35.7z M61.85,31.87
                            c-0.78,0-1.41,0.63-1.41,1.41s0.63,1.41,1.41,1.41s1.41-0.63,1.41-1.41S62.63,31.87,61.85,31.87z">
                        </path>
                        </g>
                        <circle cx="68.29" cy="33.9" r="0.96"></circle>
                        <polygon points="108.81,20.52 103.88,20.52 106.39,16.51 105.54,15.98 102.86,20.28 100.17,15.98 99.33,16.51 101.83,20.52 
                            97.02,20.52 97.02,21.52 102.08,21.52 99.33,25.93 100.17,26.46 102.86,22.17 105.54,26.46 106.39,25.93 103.63,21.52 108.81,21.52">
                        </polygon>
                        <g>
                            <path d="M39.44,10.24c-0.09-0.05-1.47-0.43-3.68,0.03c-0.4,0.08-0.8,0.15-1.18,0.26c-1.32,0.38-2.83,1.11-3.99,2.05
                                c-0.73,0.59-1.44,1.19-2.04,1.92c-0.32,0.38-0.61,0.79-0.82,1.25c-0.02,0.05-0.03,0.11-0.1,0.14c-0.04-0.1-0.05-0.19-0.06-0.29
                                c-0.04-1.13,0.16-2.08,0.5-3.15c0.37-1.17,1.04-2.65,1.83-3.74c0.26-0.36,1.12-1.48,1.19-1.62c0.03-0.06,0-0.13-0.06-0.16
                                c-0.03-0.02-0.07-0.04-0.11-0.03c-1.73,0.15-3.49,0.76-5.15,2.21c-0.16,0.14-0.96,0.88-1.39,1.43c-0.3,0.39-0.86,1.34-0.82,1.94
                                c0,0.01-0.01,0.01-0.01,0.02c-0.01,0-0.02,0-0.02-0.01c-1.31-3.67-0.79-7.58-0.26-9.38c0.32-1.08,0.43-1.63,0.43-1.63
                                c0.02-0.07,0.06-0.13,0.07-0.2c0.01-0.04,0.01-0.1,0-0.14c-0.04-0.12-0.19-0.17-0.3-0.08c-0.12,0.11-0.26,0.17-0.39,0.27
                                c-0.42,0.31-0.84,0.62-1.23,0.97c-1.39,1.27-1.47,1.47-1.47,1.47c-1.01,0.94-3.04,3.6-3.44,7.13c-0.05,0.47-0.13,0.94-0.1,1.42
                                c0,0.03-0.01,0.05-0.02,0.11c-0.07-0.09-0.12-0.14-0.17-0.21C14.6,9.66,8.47,7.08,4.61,10.57c-0.37,0.34-0.68,1.07-0.54,1.19
                                c0.28,0.26,4.62-0.6,7.46,3.36c1.25,1.74,1.62,3.34,2.03,5c0.01,0.03,0.12,0.6,0.02,0.61c-0.01,0-0.02,0-0.02-0.01
                                c-2.14-2.63-4.32-3.28-6.55-2.73c-0.72,0.18-1.39,0.48-2.03,0.85c-1.05,0.62-2.66,2.32-2.66,2.32c-0.04,0-0.05,0.09-0.02,0.12
                                c0.02,0.02,0.05,0.04,0.07,0.06c0.1,0.04,0.2,0.04,0.3,0.01c1.76-0.5,6.47,1.82,8.18,4.74c0.14,0.24,0.26,0.5,0.37,0.76
                                c0.15,0.35,0.24,0.72,0.31,1.09c0.01,0.07,0.17,1.16,0.04,1.22c-1.03-0.54-1.19-0.77-1.99-0.8c-0.76-0.02-2.35-0.25-4.25,1.46
                                c-0.06,0.05-0.07,0.13-0.03,0.2c0,0,0,0,0,0c0.03,0.05,0.08,0.07,0.13,0.08c1.51,0.07,4.04,1.7,4.89,4.88
                                c0,0.01-0.01,0.03-0.01,0.06c-0.14,0.14-0.3,0.27-0.47,0.38c-0.28,0.17-0.51,0.4-0.71,0.66C9,36.24,8.85,36.4,8.71,36.56
                                c-0.13,0.15-0.28,0.29-0.4,0.44c-0.24,0.3-0.48,0.61-0.71,0.92c-0.14,0.19-0.3,0.37-0.47,0.54c-0.23,0.24-0.47,0.47-0.69,0.72
                                c-0.18,0.21-0.37,0.32-0.66,0.23c-0.2-0.06-0.4-0.02-0.59,0.11c-0.21,0.15-0.38,0.33-0.52,0.55c-0.15,0.24-0.29,0.49-0.39,0.76
                                c-0.12,0.31-0.23,0.62-0.33,0.94c-0.11,0.35-0.29,0.65-0.45,0.97c-0.05,0.1-0.14,0.15-0.25,0.15c-0.06,0-0.13,0-0.19,0
                                c-0.12,0.01-0.22,0.05-0.31,0.15c-0.18,0.19-0.3,0.41-0.42,0.63c-0.05,0.09-0.07,0.19-0.09,0.29c-0.07,0.42-0.06,0.84-0.04,1.26
                                c0.02,0.36,0.04,0.73,0.03,1.09c-0.01,0.51-0.12,1.01-0.28,1.49c-0.1,0.32-0.22,0.63-0.42,0.9c-0.13,0.18-0.24,0.38-0.41,0.52
                                c-0.02,0.02-0.04,0.05-0.06,0.07c-0.08,0.18-0.18,0.35-0.21,0.56c-0.05,0.4-0.11,0.8-0.01,1.21c0.08,0.32,0.12,0.65,0.18,0.98
                                c0.02,0.11,0.04,0.22,0.05,0.33c0.06,0.39,0.09,0.79,0.1,1.18c0,0.1,0.02,0.19,0.01,0.28c-0.05,0.47-0.14,0.93-0.35,1.35
                                c-0.23,0.46-0.3,0.95-0.27,1.45c0.02,0.54,0.16,1.05,0.29,1.56c0.12,0.48,0.26,0.96,0.4,1.44c0.14,0.51,0.13,1.02,0.02,1.53
                                c-0.07,0.29-0.11,0.59-0.15,0.89c-0.04,0.27-0.02,0.54,0.11,0.79c0.05,0.09,0.08,0.19,0.13,0.28c0.17,0.36,0.35,0.73,0.52,1.09
                                c0.1,0.21,0.11,0.43,0.05,0.65c-0.07,0.25-0.18,0.49-0.31,0.72c-0.21,0.34-0.33,0.7-0.34,1.1c-0.01,0.3,0.03,0.6,0.09,0.9
                                c0.09,0.42,0.25,0.8,0.51,1.14c0.15,0.2,0.3,0.4,0.42,0.62c0.06,0.11,0.12,0.21,0.19,0.32c0.22,0.32,0.35,0.67,0.37,1.06
                                c0.02,0.26,0.04,0.52,0.05,0.78c0.04,0.74,0.38,1.34,0.87,1.85c0.24,0.26,0.52,0.49,0.79,0.72c0.2,0.18,0.42,0.34,0.63,0.51
                                c2.26,1.89,2.76,2.13,4.8,2.98c0.03,0.01,0.06,0.02,0.09,0.03c0.4,0.14,0.8,0.25,1.21,0.33c1.55,0.3,3.54,0.6,5.13,0.66
                                c0.29,0.01,0.59-0.01,0.88,0.04c0.21,0.04,0.42,0.07,0.63,0.09c0.31,0.04,0.61,0.07,0.92,0.12c0.59,0.11,1.18,0.14,1.78,0.12
                                c0.41-0.01,0.82-0.06,1.23-0.1c0.71-0.07,1.42-0.15,2.11-0.32c0.59-0.14,1.18-0.29,1.76-0.48c0.46-0.16,0.93-0.31,1.4-0.44
                                c0.61-0.17,1.17-0.43,1.69-0.8c1.49-1.07,2.81-2.02,4.16-4.27c0.26-0.42,0.38-0.88,0.29-1.38c-0.01-0.07-0.02-0.13-0.02-0.2
                                c-0.01-0.14-0.02-0.28-0.07-0.41c-0.14-0.4-0.08-0.78,0.13-1.14c0.32-0.56,0.67-1.11,1.03-1.65c0.31-0.47,0.56-0.97,0.75-1.51
                                c0.11-0.31,0.08-0.61-0.08-0.9c-0.04-0.07-0.07-0.15-0.1-0.23c-0.03-0.09-0.09-0.19-0.1-0.29c-0.03-0.24-0.02-0.48,0.08-0.7
                                c0.09-0.23,0.19-0.47,0.29-0.7c0.14-0.3,0.25-0.6,0.35-0.91c0.09-0.28,0.14-0.56,0.15-0.86c0.01-0.23-0.06-0.42-0.17-0.61
                                c-0.05-0.08-0.11-0.16-0.16-0.24c-0.06-0.09-0.11-0.17-0.16-0.26c-0.06-0.12-0.11-0.24-0.17-0.37c-0.05-0.12-0.07-0.24-0.04-0.37
                                c0.06-0.23,0.11-0.46,0.18-0.69c0.1-0.33,0.22-0.66,0.33-0.99c0.1-0.31,0.18-0.62,0.2-0.95c0.03-0.59,0.08-1.19,0.06-1.78
                                c-0.01-0.31-0.05-0.62-0.13-0.92c-0.04-0.16-0.14-0.26-0.28-0.33c-0.06-0.03-0.13-0.05-0.2-0.08c-0.18-0.05-0.27-0.18-0.32-0.35
                                c-0.06-0.22-0.07-0.45-0.09-0.68c-0.04-0.57,0.03-1.14,0.11-1.7c0.07-0.45,0.13-0.91,0.11-1.37c-0.01-0.14-0.02-0.28-0.02-0.43
                                c0-0.27-0.05-0.54-0.09-0.8c-0.03-0.19-0.12-0.34-0.25-0.47c-0.06-0.05-0.12-0.11-0.18-0.15c-0.15-0.1-0.2-0.24-0.19-0.41
                                c0.01-0.14,0.03-0.28,0.05-0.42c0.05-0.26,0.11-0.53,0.16-0.79c0.1-0.56,0.02-1.09-0.23-1.59c-0.06-0.13-0.14-0.25-0.21-0.37
                                c-0.16-0.3-0.33-0.59-0.49-0.9c-0.15-0.29-0.2-0.6-0.17-0.92c0.03-0.27,0.05-0.54,0.07-0.81c0.02-0.31,0.04-0.62-0.07-0.92
                                c-0.11-0.3-0.22-0.6-0.33-0.89c-0.11-0.28-0.29-0.53-0.44-0.79c-0.09-0.16-0.23-0.28-0.41-0.35c-0.11-0.04-0.23-0.08-0.34-0.11
                                c-0.06-0.02-0.15-0.05-0.21-0.06c-0.09-0.02-0.15-0.07-0.21-0.13c-0.13-0.14-0.23-0.3-0.31-0.48c-0.08-0.17-0.16-0.35-0.25-0.51
                                c-0.15-0.27-0.34-0.51-0.6-0.68c-0.04-0.02-0.07-0.05-0.11-0.08c-0.35-0.31-0.7-0.62-1.05-0.93c-0.35-0.32-0.68-0.64-1.07-0.91
                                c-0.1-0.07-0.21-0.14-0.31-0.22c0.03-0.06,0.05-0.11,0.08-0.16c0.12-0.2,0.24-0.39,0.37-0.58c0.22-0.35,0.5-0.64,0.8-0.9
                                c1.7-1.46,3.49-2.16,4.69-2.59c0.33-0.12,0.68-0.23,1.02-0.31c0.95-0.22,2.48-0.6,3.28-0.4c0.04,0.01,0.09,0.01,0.14,0
                                c0.1-0.01,0.17-0.08,0.15-0.17c-0.16-0.67-0.77-1.83-1.25-2.22c-0.9-0.73-1.17-0.81-2.39-1.34c-0.98-0.42-2.14-0.73-2.39-0.78
                                c-0.87-0.16-1.45-0.23-1.45-0.23c0-0.04,0-0.06,0.01-0.08c1.05-2.58,2.67-3.65,3.85-4.52c0.11-0.08,0.23-0.16,0.35-0.23
                                c0.38-0.23,0.77-0.46,1.15-0.69c0.14-0.08,0.27-0.17,0.39-0.27c0.08-0.06,0.07-0.16-0.01-0.22c-0.21-0.17-1.94-0.49-4.21-0.17
                                c-1.14,0.16-1.26,0.39-1.53,0.31c0.05-0.15,0.24-0.54,0.31-0.66c0.15-0.28,0.31-0.55,0.45-0.83c0.52-1.01,2.13-2.7,2.97-3.48
                                c0.39-0.36,0.78-0.72,1.18-1.07c0.15-0.14,0.32-0.25,0.48-0.39c0.35-0.31,0.72-0.6,1.08-0.89c0.65-0.51,1.34-0.96,2.05-1.38
                                c0.07-0.04,0.13-0.09,0.19-0.14C39.53,10.4,39.52,10.28,39.44,10.24z M18.29,68.13c0,0-3.46-1.74-6.03-3.01
                                c-0.62-0.29-0.99-0.33-1.16,0c-0.25,0.49,0.18,0.97,0.93,1.35c2.27,1.2,4.91,2.5,4.91,2.5s-0.57,1.11-1.19,2.37
                                c0,0-3.08-1.64-5.25-2.7c-0.62-0.32-1.05-0.38-1.24-0.02c-0.24,0.47,0.25,1.05,1.03,1.45c2.04,1.06,5.04,2.51,5.04,2.51
                                s-0.62,1.22-1.17,2.33c0,0-3.45-1.76-8.32-4.18c0,0,0.42-0.79,0.99-1.9c0,0,0.52,0.31,1.23,0.67c-0.69-0.88-0.91-1.91-0.43-2.84
                                c0.5-0.99,1.4-1.17,2.32-0.94c-0.61-0.77-0.79-1.76-0.33-2.66c0.65-1.27,1.87-1.21,3.21-0.55c2.96,1.44,6.61,3.33,6.61,3.33
                                S19.04,66.61,18.29,68.13z M21.32,62c-1.27,2.5-3.58,2.18-6.22,0.83c-2.48-1.27-3.97-3.12-2.81-5.39c1.29-2.53,3.83-2.07,6.64-0.42
                                c0,0-0.74,1.5-1.88,3.81c1.57,0.74,2.34,0.82,2.6,0.3c0.22-0.43-0.17-0.92-1.21-1.49c0,0,0.62-1.17,1.25-2.32
                                C21.6,58.53,22.21,60.26,21.32,62z M27.39,75.42C27.39,75.42,27.39,75.42,27.39,75.42c-0.01,0-0.01,0-0.02-0.01
                                c0,0-0.01-0.01-0.01-0.02C27.37,75.4,27.38,75.41,27.39,75.42C27.39,75.41,27.39,75.42,27.39,75.42
                                C27.39,75.42,27.39,75.42,27.39,75.42z M26.54,50.99c0,0-2.86-1.43-5.42-2.7c-0.6-0.28-0.99-0.33-1.16,0
                                c-0.25,0.49,0.19,0.97,0.93,1.35c2.27,1.2,5.23,2.66,5.23,2.66s-0.55,1.12-1.19,2.37c0,0-3.46-1.83-5.63-2.89
                                c-0.62-0.32-1.05-0.38-1.24-0.02c-0.24,0.47,0.25,1.05,1.03,1.45c2.06,1.07,5.04,2.5,5.04,2.5s-0.64,1.21-1.19,2.33
                                c0,0-3.35-1.71-8.22-4.12c0,0,0.42-0.79,0.99-1.9c0,0,0.47,0.28,1.15,0.63c-0.69-0.88-0.91-1.91-0.43-2.84
                                c0.51-1.01,1.43-1.17,2.37-0.91c-0.59-0.78-0.75-1.74-0.29-2.64c0.65-1.27,1.86-1.21,3.19-0.56c2.96,1.44,6.01,3.02,6.01,3.02
                                S27.29,49.47,26.54,50.99z M27.82,40.21c0,0-0.74,1.5-1.88,3.81c1.44,0.65,2.05,0.65,2.31,0.15c0.22-0.43,0.01-0.83-1.03-1.4
                                c0,0,0.65-0.98,1.38-2.23c1.53,0.98,2.27,2.62,1.32,4.5c-1.09,2.14-3.01,2.47-6.05,0.92c-2.38-1.21-3.78-3.06-2.63-5.3
                                C22.5,38.15,24.92,38.51,27.82,40.21z">
                            </path>
                            <path d="M13.83,58.25c-0.25,0.49,0.41,1.08,1.88,1.9c0.24-0.47,0.45-0.93,0.68-1.42C14.99,57.98,14.08,57.76,13.83,58.25z"></path>
                            <path d="M22.76,41.46c-0.26,0.5,0.3,1.05,1.82,1.87c0.24-0.47,0.45-0.93,0.68-1.42C23.49,40.98,22.98,41.02,22.76,41.46z"></path>
                        </g>
                    </svg>
                </Link>
            </div>            
            <div className="nav-menu">
                <ul>
                    <li>
                        <a target="__blank" href='https://memex.art'>Launch MEMEX</a>                        
                    </li>
                    <li>                        
                        <NavLink to='/' activeClassName='nav-menu-item selected' className="explore" exact={true}>Explore</NavLink>
                    </li>
                    <li> 
                        <NavLink to='/nifty' activeClassName='nav-menu-item selected' className="what-is-available" exact={true}>What is Available</NavLink>
                    </li>
                    <li>
                        <NavLink to='/artists' activeClassName='nav-menu-item selected' className="artists" exact={true}>Artists</NavLink>
                    </li>
                    <li> 
                        <NavLink to='/communities' activeClassName='nav-menu-item selected' className="communities" exact={true}>Communities</NavLink>
                    </li>
                    <li>                       
                        <NavLink to='/meme' activeClassName='nav-menu-item selected' className="meme-originals" exact={true}>Meme Originals</NavLink>
                    </li>
                    <li>
                        <NavLink to='/drops' activeClassName='nav-menu-item selected' className="drops" exact={true}>Drops</NavLink>
                    </li>
                </ul>
            </div>
            <div className='side-content'>
                <div className='content-box'>
                    <div className='content-box-inner'>
                        <div className='content-text'>
                            <div className='title'>Farm NFTs with $meme</div>
                            <p>Participate in Meme NFT farming by staking $meme tokens.</p>
                        </div>
                        <div className='actions'>
                            <a className='has-icon' href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xd5525d397898e5502075ea5e830d8914f6f0affe">
                                <img src={`${Horse}`} />
                                <span>Don’t buy $MEME</span> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
);