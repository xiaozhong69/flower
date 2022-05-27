import React from 'react';
import { UserLayout } from '../../layouts';
import {RegisterForm} from './user';

export const User_RegisterPage: React.FC = () => {
    return (
        <UserLayout>
            <RegisterForm/>
        </UserLayout>

    )
}