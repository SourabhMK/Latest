import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as angular from "angular";
import styles from '../ReactWebPartDemo.module.scss';
import { IReactWebPartDemoProps } from '../IReactWebPartDemoProps';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { escape, fromPairs } from '@microsoft/sp-lodash-subset';
import { ColorClassNames, raiseClick, Rectangle, replaceElement } from 'office-ui-fabric-react';

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>

import 'bootstrap/dist/css/bootstrap.min.css';
//import * as $ from 'jquery';
import Popper from 'popper.js';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import { IIntro } from './IIntro'
import { Row, Col, Container } from 'react-bootstrap';
export interface IIntroProps {
    description: string;
}

export class Intro extends React.Component<IIntroProps> {
    public render(): React.ReactElement<IIntroProps> {
        return (
            <Row className={styles.textColor} style={{ backgroundColor: "#93934d" }}>

                <Col md={4}>
                    <div style={{ padding: '0px 2px 0px 0px' }}>
                        <img
                            data-sp-originalimgsrc="/sites/group/SiteAssets/SitePages/workbench/13770-Sourabh-Kulkarni.JPG" src="https://sourabhmk96.sharepoint.com/sites/group/_layouts/15/getpreview.ashx?resolution=2&amp;guidSite=e8c454e4a693483a81d1cc9630a575ea&amp;guidWeb=2a31a695cf544280bf2e0e4e4949a6aa&amp;guidFile=43a50331240a4d6a9e2d9fcefb11b1fb&amp;clientType=modernWebPart" className={styles.userImg} height="1px" width="1px" alt="Profile Image" />
                    </div>
                </Col>
                {/* </div> */}
                <Col md={8}  >
                    <h6 className={`${styles.textColor} ${styles.textSize}`}>Sourabh Kulkarni</h6>
                    <h6 className={styles.textSize}>sourabhk@gnsolutions.com</h6>
                    <div style={{ marginTop: '30px' }}>
                        <span style={{ float: 'left' }} >
                            Theme Color:
                                               <input className="jscolor"
                                style={{ width: '65px', backgroundImage: 'none', backgroundColor: 'rgb(0, 83, 147)', color: 'rgb(255, 255, 255)' }}
                                id="themeSelector" value="005393" autoComplete="off" />
                        </span>
                        <a className="btn btn-info themeBox themeBtn" id="saveTheme" ng-click="saveTheme()"
                            style={{ display: 'none' }}>Save</a>
                    </div>
                </Col>
            </Row >
        );
    }
}


