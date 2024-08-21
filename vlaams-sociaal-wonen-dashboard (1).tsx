import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const Dashboard = () => {
  const totalHousingData = [
    { province: 'Antwerpen', total: 49593 },
    { province: 'Limburg', total: 21169 },
    { province: 'Oost-Vlaanderen', total: 40022 },
    { province: 'Vlaams-Brabant', total: 18376 },
    { province: 'West-Vlaanderen', total: 31715 },
  ];

  const vacancyData = [
    { province: 'Antwerpen', total: 8202, structural: 2322 },
    { province: 'Limburg', total: 1949, structural: 148 },
    { province: 'Oost-Vlaanderen', total: 7089, structural: 2543 },
    { province: 'Vlaams-Brabant', total: 2560, structural: 838 },
    { province: 'West-Vlaanderen', total: 7583, structural: 1423 },
  ];

  const newHousingData = [
    { year: '2023', count: 1165 },
    { year: '2022', count: 1164 },
    { year: '2021', count: 1346 },
    { year: '2020', count: 1810 },
    { year: '2019', count: 1909 },
  ];

  const erpResultaten = [
    { jaar: 2010, conformeWoningen: 51.8, enkelGlas: 23.7, geenDakisolatie: 28.7, geenCV: 21.1 },
    { jaar: 2020, conformeWoningen: 83.0, enkelGlas: 7.4, geenDakisolatie: 4.5, geenCV: 9.2 },
  ];

  const woningTypes = [
    { type: 'Eengezinswoningen', conformPercentage2010: 44, conformPercentage2020: 82 },
    { type: 'Appartementen', conformPercentage2010: 60, conformPercentage2020: 84 },
  ];

  const erpEvolutieData = [
    { jaar: 2010, conformeWoningen: 52, eenOfMeerKnelpunten: 48 },
    { jaar: 2014, conformeWoningen: 67, eenOfMeerKnelpunten: 33 },
    { jaar: 2016, conformeWoningen: 73, eenOfMeerKnelpunten: 27 },
    { jaar: 2018, conformeWoningen: 79, eenOfMeerKnelpunten: 21 },
    { jaar: 2020, conformeWoningen: 83, eenOfMeerKnelpunten: 17 },
  ];

  const wachtlijstLeeftijd = [
    { leeftijdsgroep: '0-18', aantal: 135790 },
    { leeftijdsgroep: '18-25', aantal: 51814 },
    { leeftijdsgroep: '26-40', aantal: 98940 },
    { leeftijdsgroep: '41-55', aantal: 67320 },
    { leeftijdsgroep: '56-65', aantal: 29852 },
    { leeftijdsgroep: '65+', aantal: 21115 },
  ];

  const wachtlijstInkomen = [
    { inkomensgroep: 'Geen', aantal: 10043 },
    { inkomensgroep: '€0 - €10.000', aantal: 29473 },
    { inkomensgroep: '€10.000 - €20.000', aantal: 102083 },
    { inkomensgroep: '€20.000 - €30.000', aantal: 43018 },
    { inkomensgroep: 'Meer dan €30.000', aantal: 20234 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Vlaams Sociaal Wonen Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Sociale Huurwoningen per Provincie</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={totalHousingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="province" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-2 text-sm">In 2020 waren er in totaal 160.875 sociale huurwoningen in Vlaanderen, met de grootste concentratie in de provincie Antwerpen.</p>
            <p className="mt-1 text-xs text-gray-500">Bron: Evaluatie verbeteringstraject ERP2020, verwerking Embuild Vlaanderen</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Leegstand Overzicht</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={vacancyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="province" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" name="Totaal Leegstand" />
                <Bar dataKey="structural" fill="#82ca9d" name="Structurele Leegstand" />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-2 text-sm">Leegstand blijft een uitdaging, vooral in Antwerpen en West-Vlaanderen. Structurele leegstand betreft vaak woningen die wachten op renovatie of sloop.</p>
            <p className="mt-1 text-xs text-gray-500">Bron: Evaluatie verbeteringstraject ERP2020, verwerking Embuild Vlaanderen</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nieuwe Sociale Huurwoningen (Laatste 5 Jaar)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={newHousingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-2 text-sm">De bouw van nieuwe sociale huurwoningen fluctueert jaarlijks. Tussen 2010 en 2020 groeide het totale patrimonium met 19.287 eenheden.</p>
            <p className="mt-1 text-xs text-gray-500">Bron: Wonen in Vlaanderen, verwerking Embuild Vlaanderen</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Verdeling Sociale Huurwoningen per Provincie</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={totalHousingData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="total"
                  label={({ province, percent }) => `${province} ${(percent * 100).toFixed(0)}%`}
                >
                  {totalHousingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <p className="mt-1 text-xs text-gray-500">Bron: Evaluatie verbeteringstraject ERP2020, verwerking Embuild Vlaanderen</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ERP2020 Resultaten</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={erpResultaten}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="jaar" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="conformeWoningen" fill="#8884d8" name="ERP-conforme woningen (%)" />
                <Bar dataKey="enkelGlas" fill="#82ca9d" name="Enkel glas (%)" />
                <Bar dataKey="geenDakisolatie" fill="#ffc658" name="Geen dakisolatie (%)" />
                <Bar dataKey="geenCV" fill="#ff8042" name="Geen CV (%)" />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-2 text-sm">Het ERP2020-programma heeft geleid tot aanzienlijke verbeteringen in de energie-efficiëntie van sociale woningen, met een sterke afname van woningen met enkel glas en zonder dakisolatie.</p>
            <p className="mt-1 text-xs text-gray-500">Bron: Evaluatie verbeteringstraject ERP2020, verwerking Embuild Vlaanderen</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Verbetering per Woningtype (ERP2020)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={woningTypes}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="conformPercentage2010" fill="#8884d8" name="Conform percentage 2010" />
                <Bar dataKey="conformPercentage2020" fill="#82ca9d" name="Conform percentage 2020" />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-2 text-sm">Zowel eengezinswoningen als appartementen hebben aanzienlijke verbeteringen ondergaan, met een grotere inhaalbeweging bij eengezinswoningen.</p>
            <p className="mt-1 text-xs text-gray-500">Bron: Evaluatie verbeteringstraject ERP2020, verwerking Embuild Vlaanderen</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Evolutie ERP-conforme Woningen</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={erpEvolutieData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="jaar" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="conformeWoningen" stroke="#8884d8" name="ERP-conforme woningen (%)" />
                <Line type="monotone" dataKey="eenOfMeerKnelpunten" stroke="#82ca9d" name="Eén of meer knelpunten (%)" />
              </LineChart>
            </ResponsiveContainer>
            <p className="mt-2 text-sm">De evolutie toont een gestage verbetering in het aandeel ERP-conforme woningen, met een snellere vooruitgang in de eerste jaren van het programma.</p>
            <p className="mt-1 text-xs text-gray-500">Bron: Evaluatie verbeteringstraject ERP2020, verwerking Embuild Vlaanderen</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Leeftijdsverdeling Wachtlijst</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={wachtlijstLeeftijd}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="leeftijdsgroep" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="aantal" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-2 text-sm">Een derde van de mensen op de wachtlijst zijn kinderen (0-18 jaar). Slechts 4% is 65+.</p>
            <p className="mt-1 text-xs text-gray-500">Bron: Vlaams Huurdersplatform, verwerking Embuild Vlaanderen</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inkomensverdeling Wachtlijst</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={wachtlijstInkomen}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="inkomensgroep" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="aantal" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-2 text-sm">Bijna 60% van de kandidaten heeft een inkomen tussen €10.000 en €20.000 per jaar.</p>
            <p className="mt-1 text-xs text-gray-500">Bron: Vlaams Huurdersplatform, verwerking Embuild Vlaanderen</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
