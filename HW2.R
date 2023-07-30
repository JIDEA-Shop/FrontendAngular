#=============================================================================
# PROGRAMMER: Javier Oliva
# PANTHER ID: 6132253
# CLASS: COP4830
# SECTION: U01C
# SEMESTER: Summer 2021
# CLASSTIME: T/TH 11:45-01:20 pm
# CERTIFICATION: I understand FIU’s academic policies, and I certify that this 
#                work is my own and that none of it is the work of any other person.
#=============================================================================

install.packages("xlsx") #Install xlsx
library("xlsx") #load package

modelData <- read.xlsx(file.choose(), 1)

# Display variable names
names(modelData) 

#Creating model1
model1 <- lm(UNRATE_PCH ~ DFII10_PCH + CPILFESL_PCH + XTEITT01CNM156S_PCH +
               DCOILWTICO_PCH + PCOPPUSDM_PCH + PCE_PCH + WPU101_PCH + GPDIC1_PCH
             + RRVRUSQ156N_PCH, data = modelData)

#Display Stats
summary(model1)

#Plot model1 resdiual density function
plot(model1$residuals)

#Run Shapiro Test
shapiro.test(model1$residuals)

#Create Model2
model2 <- lm(UNRATE_PCH ~ DFII10_PCH + CPILFESL_PCH + XTEITT01CNM156S_PCH +
               DCOILWTICO_PCH + PCE_PCH + RRVRUSQ156N_PCH, data = modelData)

#Display Stats
summary(model2)

#Store model2 data
model2Data <- data.frame(modelData[ , c("UNRATE_PCH" ,"DFII10_PCH", "CPILFESL_PCH", 
                                        "XTEITT01CNM156S_PCH", "DCOILWTICO_PCH", "PCE_PCH", 
                                        "RRVRUSQ156N_PCH")] )

#Predictions
model2Pred <- predict(model2, model2Data)

#======Calculation of prediction accuracy=======================
actual_preds <- data.frame(cbind(index = seq(1: nrow(model2Data)), 
                                  actuals= model2Data$UNRATE_PCH,
                                  predicteds=model2Pred))  

cor(actual_preds$actuals,actual_preds$predicteds)  
#===============================================================

#Create model3
model3 <- lm(UNRATE_PCH ~ DFII10_PCH + PCE_PCH , data = modelData)

#display stats
summary(model3)

model3Data <- data.frame(modelData[ , c("UNRATE_PCH" ,"DFII10_PCH",  "PCE_PCH")])

#======================Manual sampling for model 4=================
#setting seed
set.seed(100)

#row indices for training data
trainingRowIndex <- sample(1:nrow(model3Data), 0.6*nrow(model3Data))

#model training data
trainingData <- model3Data[trainingRowIndex, ]

#test data
testData <- model3Data[-trainingRowIndex, ]

#Build model4
model4 <- lm(UNRATE_PCH ~ DFII10_PCH + PCE_PCH , data = trainingData)

#display stats
summary(model4)

#predict testing set
distPred <- predict(model4,testData)

head(distPred)


#======Calculation of prediction accuracy=======================
act_preds <- data.frame(cbind(index = seq(1: nrow(testData)), 
                                 actuals= testData$UNRATE_PCH,
                                 predicteds=distPred))  

cor(act_preds$actuals,act_preds$predicteds)  
#===========Plotting actual vs predicted==============================================

install.packages("ggplot2")
library("ggplot2")

gg <- ggplot(data = act_preds, aes(index)) +
      geom_point(aes(y = actuals), color = "red") +
      geom_point(aes(y = predicteds), color = "blue") +
      labs(title = "Actual vs Predicted Values")
gg

#=================K-fold cross validation====================================
install.packages('caret')
library('caret')

controlled <- trainControl(method = "cv", number =10)
control <- lm(UNRATE_PCH ~ DFII10_PCH + PCE_PCH , data = modelData)

nrow(model3Data)
summary(model3Data)
      