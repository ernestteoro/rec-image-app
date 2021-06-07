# https://docs.microsoft.com/cli/azure/storage/account?view=azure-cli-latest#az_storage_account_generate_sas
az storage account generate-sas --expiry 2021-12-30T12:00Z \
    --permissions rwdlac \
    --resource-types sco \
    --services b \
    --https-only \
    --account-key cvCXoKpbQIEqgM/CMsoK+W9P83B+neOO5sfHMMdqwBMBRvxy4uOH3mmzzMPd113geZfPYoSjCNkRsar3jQ3OSQ== \
    --account-name myazuretppstorage \
    --subscription 1c36efb1-3780-4ebf-a03f-2c47610a90ad

# Save the result - this is your SAS Token