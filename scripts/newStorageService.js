//import * as msRest from "@azure/ms-rest-js";
//import * as msRestAzure from "@azure/ms-rest-azure-js";
const msRestNodeAuth = require("@azure/ms-rest-nodeauth");
const azureStorage = require("@azure/arm-storage");
const StorageManagementClient = azureStorage.StorageManagementClient;
const StorageManagementModels = azureStorage.StorageManagementModels;
const StorageManagementMappers = azureStorage.StorageManagementMappers;

// DON'T DO THIS IN PRODUCTION CODE
const subscriptionId = "1c36efb1-3780-4ebf-a03f-2c47610a90ad";
const existingResourceGroup = "mes_ressouce";
const storageResourceName = "myazuretppstorage";

// 24 chars - no space, dash, or uppercase
const longStorageAccountName = storageResourceName + Math.random().toString().replace(/0\./, '');
const accountName = longStorageAccountName.substring(0, 24);


msRestNodeAuth.interactiveLogin().then(async(creds) => {

    const client = new StorageManagementClient(creds, subscriptionId);

    const blobServiceOptions = {
        accessTier: 'Hot',
        allowBlobPublicAccess: true,
        customDomain: {
            name: "",
            useSubDomainName: false
        },
        enableHttpsTrafficOnly: true,
        isHnsEnabled: false,
        kind: 'StorageV2',
        largeFileSharesState: 'Disabled',
        location: 'westus',
        sku: {
            name: 'Standard_RAGRS',
            tier: 'Standard'
        }

    }
    const createStorageAccountResponse = await client.storageAccounts.create(existingResourceGroup, accountName, blobServiceOptions);

    console.log(createStorageAccountResponse);

}).catch((err) => {
    console.error(err);
});