// This data represents the data that would be returned from the
//  `list_proposal` transaction call === ZomeApiResult<Vec<Address>>|
//  (ie. Data === an Array/Vector of all proposal commit hashes/ address.)

// NOTE: We can determine whether the current user intiated or recieved
// the proposal by reference to the `request` value on the `Proposal` struct.
//  ==> If the `request` key has a value, then the value the hash commit/address
//       of the original request, thus meaning that the current agent is the recipient;
//        however, if there value is none, or inexistant, then that the means the current
//        current agent is initiating the proposal.


export const list_of_proposals = [
  "15gFHzVBU3pJvZXPA1TZAkiaDXot91GkKx",
  "1QHt8b5S9B9iRdZzuQSYqK9Dm4T7odJ4ig",
  "1JDc4A8RrMG3DkP4Ud46sb91aAdtA2bq27",
  "1PW8nFDQXXh23SQqYYEimM5F6eT61GtzGJ",
  "18CAtQdUahv1iMmhm5LtMfXwZevFZtrbPj",
  "1BFe7xaqCh2gHf94AC5xmH6ooShbRy4vC",
  "12tdWnJ19nMcJu6uwqCMcaSiGCxVYaJGFy",
  "18aku31TR2myUPZwtN6igqRD5umcPcNdQv",
  "14XsP9fprZDVjzihus1QJdtgtbDGQcSsVy",
  "14FB7VaU92kVurP2MPFV3a6PnH8Tm88hTp",
  "16jJvYFPzcadwZFMD5VTFjtsR2b48x3N1D",
  "1ABnXSeHTaxQxA9thR17etsPhfQ7uA7GNq",
  "1AiWHWmDV1TXrCu3XKQFwm9bvTP1DvNdyk",
  "1Fa3yRKiooECizRMJ73Sv8rdFAveX75djg",
  "1MHshNUbau2DtHdnLtHgMRTuLhb9wE8Yij",
  "1L6gSidattxqWhyXRQtcEaDKxPDTpcn4r4",
  "17LqsnHgw46BtQ82uo5iixz7bRSQvkEvwK",
  "1GNgo7551BQjn4SA2Wk8LiDgUcRJzY6PE6",
  "1L2hXZvntX5qguW9eTdayHUsaqudPcthH7",
  "1BnBry2pBuZqrnDSb3hcrw4R3PR1ATcnPo",
  "1N6kH9MRjPvFc4jWPLL3nFGK2ZGFzz7c34",
  "1DF1Rq949AkWkRbFoLw92qS3fao7c6EFM9",
  "1HsdMmcniUWgziDhwkKHAJXwnVYM8dnBwF",
  "1ENadWGcRqutEkCp43hABbT3eX9oYWKqs7",
  "192Me6cmXvH3Mtq1KgJVyUiEPobMtgGPCv",
  "1Bcyvu5ohLvf5UpEHf2yfYygnVKhKef2DS",
  "17t65wJQUgzivquMX7MJJ4n2poETVyGdY5",
  "18DegcR7ypsZs3sPkDASat6mbUua14X8ih",
  "13uPfDQmdQQAJSKzbUxPuV3E67EcGpG6LP",
  "1AwCoffBKZDRLvMwipXEymcCzGWxy3njBx",
  "16pNE8qkVJi38JLojumq1cS1y4gjH3wkAY",
  "1Aa2ocw9QPDHJUE34Za69mbV3FU4zCki8r",
  "1CF8r3rd1r69D5Z3uMfYFjeDdKZeyQMc9j",
  "116E4ARzs1MNJkprVs2n6eYZWwbYFy2x85",
  "1KBp6oa7g3KugWQ6wBXLo8NwJ49RqpVzXy",
  "148K3pESpn8NNDf6zYmszPN5813Gd21tNg",
  "1C7YL8u7qdeCnCGorsTP1he2ddPDzwX2DA",
  "15EXQobfMAfY6b5WVrnLqqvFTpQBnVf55Z",
  "1Dz3xAFGGr9GfL1QXhjdLasFatpa6qJ4WX",
  "12bi3rzNEqe1rDRzuiZcvvSy7yyGUMdbfw",
  "1KYm7aUo36X9asPnzNjr4m41YszgmC18A5",
  "1EQ8oAVKXUYWtqZVMiqF7Z6mxcEHRKAcdG",
  "1Nj5fdZYHv3TTyjHmJcKDgavQM9ZMpAXGB",
  "176PyxLAkyW35Z7Krws4TH1dwXraejxVEx",
  "1Fgnfcy4wJF5DLSzr6UdpnFGCrvRKzyGn",
  "1Cuvt3vi1hmqZkcQsE5uiRmWhtFUcUxwbt",
  "165pH8d6cxoPvyNUVLkjz5dy2YtwSAdzwY",
  "1BThnTVYCt2B2ivj26jw7P8JmN32wkrfFU",
  "1M4eqy3c38fCbp6oKzVB4DTEzeyfdmKxjh",
  "1Mnnpbq8BosHePWDCs4ep22Zvcju57KHzw",
  "1E2H2kRpc67ztaesFgj8Kce1qaC5GNJXgv",
  "192nsdCFYpzrRgLMjwLXURaGPDREexTH5c",
  "15jYzCXUobJrSepGeKgnHzVTaA9TVvezcN",
  "1LkDHeUkDWjtBe3HqQntkHGJvJaN91yiKG",
  "1PkYZHTTXCN4b9sLtcWAc62eUwPoT4JnGZ",
  "19ctXA924bjbHtxpfFeaZzfnTtHTSNiGey",
  "16SK2P5uW8qeMMGYKZjMgYjsGU9CQiv5RQ",
  "1Dtx8sGrAwWECaPU6qnjmDKKGQdFT62GC6",
  "1PRCWvAJT1eiARhVpfWcNcSowk5a5eeJFw",
  "1JGKvTGC915CoUQ4kXtDohD5z4FVzqDXH6",
  "1HAu8aboA5QaCewmb83BLg7MtyTXT7Jsty",
  "19c5Q5yQtQLX4jrBLWCnbvcZTvJweiRiUe",
  "19X3h91PnDmh2mbMyHnQDnSdRyuCVLV7H9",
  "16xnRL16zs8sV7Z6m3g6sFrpoHWddPLe2G",
  "168RZjUxWvXXDwnv6bSA58Bbd8jsoVu5qk",
  "1P7ESMXEr8JkLvpVQo9ZoAbkVnktGcVQoz",
  "1M2VMa1VaF2pJgPdJAf7y4ahD7kkKYDM37",
  "1A2p948xxuH9VxSk9DrqPA9QXKVDFFbxpB",
  "15xX6ELT2Dj6APREatypLX6C3JYvZrtR5D",
  "1CMj57RyCaBzn9FssRHM9qx2jtb8zsARQw",
  "1DP4Yavp5N4GxProHzJF4ieMUe6sSSUYvQ",
  "17SaudWFcF2NA4FqP6L8BZyqs7bosjP1SJ",
  "17YL71yfykmT426ZsFpQ3VUbNDoGFLHUW1",
  "1LsgcvYhp1PD5n3fAhiDsnDKjHYrpVSSCP",
  "12p6pgiXDkvH5vZAfAbB4kNhga2Q2YiMqK",
  "1KxZrFMJtNLvkefZhu1aryiNkkMDR4WjyQ",
  "1QGyhV85ZisdUtt8pyoqBXSdi6ZPgUxvCz"
];
