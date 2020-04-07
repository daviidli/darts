int masterLines = 10;
int slaveLines = 10;

int matrixMaster[] = {22, 23, 24, 25, 26,27, 28, 29, 30, 31};
int matrixSlave[] = {36, 37, 38, 39, 40, 41, 42, 43, 44, 45};

void setup() {
    Serial.begin(9600);

    for(int i = 0; i < slaveLines; i++){
        pinMode(matrixSlave[i], INPUT_PULLUP);
    }

    for(int i = 0; i < masterLines; i++){
        pinMode(matrixMaster[i], OUTPUT);
        digitalWrite(matrixMaster[i], HIGH);
    }
}

void loop() {
    for(int i = 0; i < masterLines; i++){
        digitalWrite(matrixMaster[i], LOW);
        for(int j = 0; j < slaveLines; j++){
            if(digitalRead(matrixSlave[j]) == LOW){
                Serial.print(j);
                Serial.print(",");
                Serial.print(i);
                Serial.print("\n");
                delay(500);
                break;
            }
        }
        digitalWrite(matrixMaster[i], HIGH);
    }
}
