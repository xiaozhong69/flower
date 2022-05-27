import React from 'react';
import { UserLayout } from '../../layouts';
import {User_SignInForm} from './user';

export const User_SignInPage: React.FC = () => {
    return (
        <UserLayout>
            <User_SignInForm/>
        </UserLayout>
    );
}