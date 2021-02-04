import * as React from 'react';
import styles from './ReactWebPartDemo.module.scss';
import { IReactWebPartDemoProps } from './IReactWebPartDemoProps';
import { escape, fromPairs } from '@microsoft/sp-lodash-subset';
import { IColor } from '../IColor';
import { ColorList, IColorListProps } from './ColorList';
import { Intro, IIntroProps } from './Introduction/Intro';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import Assign from './AssignmentPoints/Assign';
import { TopNavi } from './TopNavigation/TopNavi';
import { CoursePro } from './CourseProgress/CoursePro';
import { BottomNavi } from './BottomNavigation/BottomNavi';

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>



import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
import Popper from 'popper.js';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { IIntroProps } from './Introduction/IIntroProps'

import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

export default class ReactWebPartDemo extends React.Component<IReactWebPartDemoProps, {}> {
  public render(): React.ReactElement<IReactWebPartDemoProps> {
    return (
      <div className={styles.reactWebPartDemo}>

        <div className={styles.container} ng-app="myApp" ng-controller="myCtrl" ng-init="init()">
          <Row>
            <Col md={4}>
              <Intro description="" />
              <Assign description="" />
            </Col>
            {/* Column 1 completed */}
            <Col md={8} >
              {/* Column 2 Starts */}
              <TopNavi description="" />
            </Col>
          </Row>
          {/* </div> */}
          <div >
            <CoursePro description="" />
          </div>
          <div >
            <BottomNavi description="" />
          </div>
          {/* </div> */}
        </div>
      </div >
    );
  }
}
