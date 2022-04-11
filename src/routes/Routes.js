import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardLayout from '../layout/dashboard/DashboardLayout';
import LandingLayout from '../layout/landing/LandingLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import DataPengajuan from '../pages/data-pengajuan/DataPengajuan';
import Formulir from '../pages/formulir/Formulir';
import Home from '../pages/home/Home';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact>
            <LandingLayout>
              <Home />
            </LandingLayout>
          </Route>
          <Route path={'/formulir'} exact>
            <LandingLayout>
              <Formulir />
            </LandingLayout>
          </Route>
          <Route path={'/data-pengajuan'} exact>
            <LandingLayout>
              <DataPengajuan />
            </LandingLayout>
          </Route>
          <Route path={'/dashboard'} exact>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
