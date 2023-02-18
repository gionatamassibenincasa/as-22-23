## Dispositivo Non Sicuro
##
## dal nome della challenge e dal pacchetto comprendo che si tratta di DNS exfiltration

# importo wireshark
import pyshark
# mi interessano solo i pacchetti DNS in uscita (porta destinazione 53) che contengono la parola attacker
cap = pyshark.FileCapture('./training/network/dispositivo_non_sicuro/capture.pcapng', display_filter='dns and frame contains "attacker" and udp.dstport == 53')
# file esfiltrato
exfiltered = b''
for pkt in cap:
    # devo estrarre la query che contiene un numero di sequenza PUNTO i dati come stringa in HEX PUNTO attacker PUNTO eve
    [seq, dataChunk, a, e] = pkt.dns.qry_name.split(".")
    exfiltered += bytes.fromhex(dataChunk)
    
f = open("esfiltrated.gz", "wb")
f.write(exfiltered)
f.close()

# poi estraggo i file e trovo l'immagine con la flag
# flag{i5_dns_th3_new_c4vall0_di_7r01a?}

