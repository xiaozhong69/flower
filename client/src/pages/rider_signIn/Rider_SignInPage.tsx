import React from 'react';
import { UserLayout } from '../../layouts';
import {Rider_SignInForm} from './rider';

export const Rider_SignInPage: React.FC = () => {
    return (
        <UserLayout>
            <Rider_SignInForm/>
        </UserLayout>
    );
}