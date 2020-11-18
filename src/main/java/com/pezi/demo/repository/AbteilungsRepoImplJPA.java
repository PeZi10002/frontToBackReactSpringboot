@Repository
public class AbteilungsRepoImplJPA implements AbteilungsRepo
{
    @Autowired
    AbteilungsRepository abteilungsREposirotry;


    List<Abteilung> getAllAbteilungen();
    {

    }
Abteilung insertAbteilung(Abteilung abteilung){
        this.abteilugnsREpository.save(abteilung);
}


}



