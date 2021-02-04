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

export interface IBottomNaviProps {
    description: string;
}

export class BottomNavi extends React.Component<IBottomNaviProps>{
    public render(): React.ReactElement<IBottomNaviProps> {
        return (
            // {/* <!-- Mission Progress and LeaderBoard starts  --> */}
            <div className={styles.row} style={{ padding: "0px 2px 2px 2px" }}>
                <div className={`${styles['col-md-12']} ${styles.textColor}`} ng-attr-style="background-color: {{backColor}} "
                    style={{ backgroundColor: "#93934d" }}>
                    {/* <!-- Nav tabs --> */}
                    <ul className={`${styles.nav} ${styles["nav-tabs"]}`} role="tablist">
                        <li role="presentation" className={styles.active}>
                            <a role="tab"
                                data-toggle="tab">Learning Mission</a>
                        </li>
                        <li role="presentation">
                            <a role="tab"
                                data-toggle="tab">Leader Board Learning Mission</a>
                        </li>
                        <li role="presentation">
                            <a role="tab" data-toggle="tab">Rewards</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="LearningMission">
                            <div className={styles.row} style={{ padding: "5px" }}>
                                <div className={styles["col-md-8"]}>
                                    <div className={styles.row} style={{ textAlign: "center" }}>
                                        <h6 className={styles.textColor}>Learning Missions in Progress</h6>
                                    </div>
                                </div>
                                <div className={styles["col-md-4"]}>
                                    <div className={styles.row} style={{ textAlign: "center" }}>
                                        <h6 className={styles.textColor}>Completed Missions</h6>
                                    </div>
                                    <div className="row" style={{ textAlign: "center" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- learning Mission Tab Starts --> */}
                    </div>
                </div>
            </div>
        );
    }
}
