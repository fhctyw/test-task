import { useQuery, useMutation, useQueryClient } from 'react-query';
import { apiClient, OrganizationPackage, NewOrganizationPackage } from './ApiClient';

const getOrganizationPackages = async (): Promise<OrganizationPackage[]> => {
    const { data } = await apiClient.get('/organization-packages');
    return data;
};

const createOrganizationPackage = async (newPackage: NewOrganizationPackage): Promise<OrganizationPackage> => {
    const { data } = await apiClient.post('/create-organization-packages', newPackage);
    return data;
};

export const useGetOrganizationPackages = () => {
    return useQuery<OrganizationPackage[], Error>('organizationPackages', getOrganizationPackages);
};

export const useCreateOrganizationPackage = () => {
    const queryClient = useQueryClient();

    return useMutation<OrganizationPackage, Error, NewOrganizationPackage>(createOrganizationPackage, {
        onSuccess: () => {
            queryClient.invalidateQueries('organizationPackages');
        },
    });
};
