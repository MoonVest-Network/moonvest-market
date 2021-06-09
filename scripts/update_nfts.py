#!/usr/bin/python3.8
import json
import boto3
from web3 import Web3
from pprint import pprint
import requests
from requests.exceptions import HTTPError
import ipfsApi

dynamodb = boto3.resource('dynamodb', endpoint_url="http://localhost:8000")
nft_contract_addresses = [
        "0xc54b96b04aa8828b63cf250408e1084e9f6ac6c8",
        "0xf7a21ffb762ef2c14d8713b18f5596b4b0b0490a",
        "0xdf7952b35f24acf7fc0487d01c8d5690a60dba07",
        "0x8a0c542ba7bbbab7cf3551ffcc546cdc5362d2a1",
        "0xc014b45d680b5a4bf51ccda778a68d5251c14b5e"
    ]

with open('nft_contract_abi.json', 'r') as file:
    nft_contract_abi = file.read().replace('\n', '')

dynamodb = boto3.client(
    'dynamodb',
    aws_access_key_id=AWS_ACCESS_KEY,
    aws_secret_access_key=AWS_SECRET_KEY
)

def put_nft_item( name, description, collection_id, token_id, url, image ):

    table = dynamodb.Table('nftItems')
    response = table.put_item(
       Item={
            'name': name,
            'description': description,
            'nftCollectionID': collection_id
        }
    )
    return response

def put_nft_collection( name, description, contract_address ):
    pass

if __name__ == '__main__':
    w3 = Web3(Web3.HTTPProvider('https://bsc-dataseed.binance.org/'))

    # Check if connected to Web3
    # print("connected " + str(w3.isConnected()))

    for contract_address in nft_contract_addresses:
        contract = w3.eth.contract(contract_address, abi=nft_contract_abi)
        next_token_id = contract.functions.nextTokenId().call()
        for token_id in range(1, next_token_id):
            token_url = contract.functions.tokenURI(token_id).call()
            owner_address = contract.functions.tokenURI(token_id).call()

    nft_item = put_nft_item(name, description, collection_id, token_id, url, image)
    print("Added NFT Item:")
    pprint(nft_item, sort_dicts=False)


