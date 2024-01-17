import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://server:3000/api/v1',
    headers: {
        'Content-Type': 'application/json',
    }
});

export type OrganizationPackage = {
    id: number;
    name: string;
    description: string;
    price: number;
    OrganizationPackageCategories: any
};

export type NewOrganizationPackage = Omit<OrganizationPackage, 'id'>;