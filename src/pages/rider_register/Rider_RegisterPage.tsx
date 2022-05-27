import React from 'react';
import { UserLayout } from '../../layouts';
import {RegisterForm} from './rider';

export const Rider_RegisterPage: React.FC = () => {
    return (
        <UserLayout>
            <RegisterForm/>
        </UserLayout>
    )
}