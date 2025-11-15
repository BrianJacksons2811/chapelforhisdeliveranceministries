<?php
// PayGate credentials
$paygateId  = "32307943";
$reference  = "CDM-Donation";
$amount     = $_POST['amount'] ?? "10000"; // ZAR 100.00 = 10000 cents
$currency   = "ZAR";
$returnUrl  = "https://yourwebsite.com/success.html";
$cancelUrl  = "https://yourwebsite.com/cancel.html";
$key        = "Ov6nyOdgm1apI"; // Your merchant key
$passphrase = "I love chichi_2013"; // Your passphrase

// Build parameter string
$params = [
    "PAYGATE_ID"  => $paygateId,
    "REFERENCE"   => $reference,
    "AMOUNT"      => $amount,
    "CURRENCY"    => $currency,
    "RETURN_URL"  => $returnUrl,
    "CANCEL_URL"  => $cancelUrl
];

// Create query string
$paramString = "";
foreach ($params as $key => $value) {
    $paramString .= "$key=$value&";
}
$paramString = rtrim($paramString, "&");

// Append passphrase
$paramString .= "&passphrase=" . urlencode($passphrase);

// Create checksum
$checksum = md5($paramString);

// Output hidden inputs (to include in HTML form)
foreach ($params as $key => $value) {
    echo "<input type='hidden' name='$key' value='$value' />\n";
}
echo "<input type='hidden' name='CHECKSUM' value='$checksum' />\n";
?>
