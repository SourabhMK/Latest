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

export interface ICourseProProps {
    description: string;
}

export class CoursePro extends React.Component<ICourseProProps>{
    public render(): React.ReactElement<ICourseProProps> {
        return (
            <div className={styles.row} style={{ padding: "0px 2px 2px 2px" }}>
                <div className={`${styles['col-md-12']} ${styles.textColor}`} ng-attr-style="background-color: {{backColor}}"
                    style={{ backgroundColor: "#93934d" }}>
                    Course Progress
                </div>
            </div>
        );
    }
}
