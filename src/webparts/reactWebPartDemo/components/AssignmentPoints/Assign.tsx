import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as angular from "angular";
import styles from '../ReactWebPartDemo.module.scss';
import { IReactWebPartDemoProps } from '../IReactWebPartDemoProps';
import { escape, fromPairs } from '@microsoft/sp-lodash-subset';
import { ColorClassNames, raiseClick, Rectangle, replaceElement } from 'office-ui-fabric-react';
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>

import 'bootstrap/dist/css/bootstrap.min.css';

import { IAssignProps } from './IAssignProps';

export default class Assign extends React.Component<IAssignProps>{
    public render(): React.ReactElement<IAssignProps> {
        return (
            // <!--Row 2 column 1-->
            <div className={styles.row} style={{ padding: "2px 0px 2px 0px" }}>
                <div className={styles['col-md-12']} style={{ padding: "0px 2px 0px 0px", textAlign: 'center' }}>
                    <div className={styles['col-md-12']} ng-attr-style="backgroundColor:{{backcolor}} " style={{ backgroundColor: '#93934d' }}>
                        <h1 className="textColor points ng-binding" style={{ textAlign: 'center' }}>0</h1>
                        <h6 style={{ textAlign: 'center' }}>Assignment Points</h6>
                    </div>
                </div >


            </div>
        )
    }
}