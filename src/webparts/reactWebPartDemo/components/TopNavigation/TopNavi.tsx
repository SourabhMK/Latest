import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as angular from "angular";
import styles from '../ReactWebPartDemo.module.scss';
import { IReactWebPartDemoProps } from '../IReactWebPartDemoProps';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { escape, fromPairs } from '@microsoft/sp-lodash-subset';
import { ColorClassNames, raiseClick, Rectangle, replaceElement } from 'office-ui-fabric-react';
import classNames from 'classnames'

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>

import 'bootstrap/dist/css/bootstrap.min.css';

export interface ITopNaviProps {
    description: string;
}

export class TopNavi extends React.Component<ITopNaviProps>{
    public render(): React.ReactElement<ITopNaviProps> {
        return (
            // <div className={styles.reactWebPartDemo}>
            //     <div className={styles.container}>
            // <div className={styles.row}>



            // {/* <div className={styles['col-md-8']} style={{ padding: "15px" }}> */}
            <div className={styles.row} style={{ padding: "0px 2px 2px 2px" }}>
                <div className={`${styles['col-md-12']} ${styles.textColor}`} ng-attr-style="backgroundColor: {{backColor}}"
                    style={{ backgroundColor: '#93934d' }}>
                    {/* <!-- Nav Table --> */}
                    <ul className={`${styles.nav} ${styles['nav-tabs']}`} role="tablist">
                        <li role="presentation" className={styles.active}>
                            <a href="#myBadges" aria-controls="my-mission-activity" role="tab" data-toggle="tab">Badges</a>
                        </li>
                        <li role="presentation">
                            <a href="#myRewards" aria-controls="myRewards" role="tab" data-toggle="tab">Rewards</a>
                        </li>
                    </ul>
                    {/* <!-- Tab panes --> */}
                    <div className="tab-content">
                        {/* <!-- My Badge Tab Starts --> */}
                        <div role="tabpanel" className="tab-pane active">
                            <div className="carousel slide media-carousel" id="media">
                                <div className="carousel-inner">
                                    {/* <!-- ngRepeat:x in Badges --> */}
                                </div>
                                <a data-slide="prev" href="#media" ng-non-bindable className="left carousel-control">
                                </a>
                                <a data-slide="next" href="#media" ng-non-bindable className="right carousel-control" >
                                </a >
                            </div >
                        </div >
                        {/* < !--My Badges Ends-- >
                    < !--My Reward Tab Starts-- > */}
                        <div role="tabpanel" className="tab-pane" id="myRewards" >
                            < div className="carousel slide media - carousel" id="media1" >
                                < div className="carousel - inner" >
                                    {/* < !--ngRepeat: x in Rewards-- > */}
                                </div >
                                <a data-slide="prev" href="#media1" ng-non-bindable className="left carousel-control" >
                                </a >
                                <a data-slide="next" href="#media1" ng-non-bindable className="right carousel-control" >
                                </a >
                            </div >
                        </div >
                        {/* < !--My Reward Tab Ends-- > */}
                    </div >
                </div >
            </div >
            // </div >


            // {/* </div > */ }
            //     </div >
            // </div >
        );
    }
}