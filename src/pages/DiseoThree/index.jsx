import React from "react";

import { Button, Img, PagerIndicator, Text } from "components";

const DiseoThreePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans gap-[52px] items-center justify-start mx-auto w-full">
        <div className="bg-gradient  flex flex-col items-end justify-start sm:pl-5 pl-[23px] pt-[23px] w-full">
          <div className="flex flex-col md:gap-10 gap-[81px] items-center justify-start md:px-5 w-[97%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
              <Img
                className="h-[95px] md:h-auto object-cover"
                src="images/img_logo.png"
                alt="logo"
              />
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[56%] md:w-full">
                <Text
                  className="text-green-A400_d3 text-lg tracking-[0.50px]"
                  size="txtOpenSansRomanSemiBold18"
                >
                  Inicio
                </Text>
                <Text
                  className="text-lg text-white-A700 tracking-[0.50px]"
                  size="txtOpenSansRomanSemiBold18WhiteA700"
                >
                  Conoce a Fratech
                </Text>
                <Text
                  className="text-lg text-white-A700 tracking-[0.50px]"
                  size="txtOpenSansRomanSemiBold18WhiteA700"
                >
                  Casos de éxito
                </Text>
                <Text
                  className="text-lg text-white-A700 tracking-[0.50px]"
                  size="txtOpenSansRomanSemiBold18WhiteA700"
                >
                  Servicios
                </Text>
                <Button
                  className="cursor-pointer font-extrabold leading-[normal] min-w-[183px] rounded-lg text-center text-lg tracking-[0.50px]"
                  color="green_A400_d3"
                  size="md"
                >
                  Contacto
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-lucidasanstypewriter md:gap-10 items-start justify-between w-[98%] md:w-full">
              <div className="flex flex-col gap-[9px] justify-start">
                <Text
                  className="md:text-5xl sm:text-[42px] text-[56px] text-white-A700 tracking-[0.50px]"
                  size="txtLucidaSansTypewriterBold56"
                >
                  <>
                    Soluciones en <br />
                    infraestructura
                  </>
                </Text>
                <div className="md:h-[225px] h-[273px] ml-3 md:ml-[0] relative w-[91%] sm:w-full">
                  <div className="absolute bg-green-A400 bottom-[0] flex flex-col font-opensans items-center justify-end left-[1%] p-[15px] rounded-[27px]">
                    <Text
                      className="text-center text-lg text-white-A700 tracking-[0.50px]"
                      size="txtOpenSansRomanExtraBold18"
                    >
                      Más sobre nosotros
                    </Text>
                  </div>
                  <Text
                    className="absolute inset-x-[0] leading-[37.00px] mx-auto text-white-A700 text-xl top-[0] w-full"
                    size="txtManropeLight20"
                  >
                    Somos una empresa conformada por expertos con más de 10 años
                    de experiencia en el ramo de tecnología de información
                    especializada para sectores industriales, corporativos,
                    seguridad, entre otros.
                  </Text>
                </div>
              </div>
              <Img
                className="h-[512px] md:h-auto object-cover rounded-bl-[256px] rounded-tl-[256px]"
                src="images/img_fotoheader.png"
                alt="fotoheader"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:px-5 relative w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[3550px] items-center justify-start mx-auto py-[98px] w-full"
            style={{ backgroundImage: "url('images/img_group11.png')" }}
          >
            <div className="flex flex-col items-start justify-start mb-28 w-full">
              <div className="flex flex-col md:gap-10 gap-[170px] justify-start md:ml-[0] ml-[105px] w-[93%] md:w-full">
                <div className="flex flex-col items-center justify-start pb-[7px] w-full">
                  <div className="flex md:flex-col flex-row gap-[33px] items-end justify-between w-full">
                    <div className="md:h-[570px] h-[674px] relative w-[41%] md:w-full">
                      <Img
                        className="absolute h-[570px] object-cover right-[0] rounded-bl-[30px] rounded-br-[30px] rounded-tl-[244px] rounded-tr-[244px] top-[0] w-4/5"
                        src="images/img_imagen.png"
                        alt="imagen"
                      />
                      <div className="absolute h-[187px] left-[0] top-[22%] w-[37%]">
                        <div className="absolute bg-white-A700 flex flex-col gap-11 h-full inset-[0] items-center justify-center m-auto p-1 rounded-[20px] shadow-bs w-[87%]">
                          <Img
                            className="h-14 md:h-auto mt-[18px] object-cover w-[28%] sm:w-full"
                            src="images/img_features8png.png"
                            alt="features8png"
                          />
                          <Text
                            className="leading-[30.00px] mb-[9px] text-blue_gray-700 text-center text-shadow-ts text-xs"
                            size="txtOpenSansRomanRegular12"
                          >
                            <>
                              Alianzas con marcas
                              <br />
                              nacionales e internacionales
                            </>
                          </Text>
                        </div>
                        <Text
                          className="absolute bg-clip-text bg-gradient1  bottom-[36%] inset-x-[0] mx-auto text-center text-shadow-ts text-transparent text-xl w-max"
                          size="txtOpenSansBold20"
                        >
                          Certificaciones
                        </Text>
                      </div>
                      <div className="absolute bottom-[0] h-[188px] right-[29%] shadow-bs w-[34%]">
                        <div className="h-[188px] m-auto w-full">
                          <div className="bg-gradient2  h-[188px] m-auto rounded-[94px] w-full"></div>
                          <Text
                            className="absolute bottom-[23%] inset-x-[0] mx-auto text-center text-lg text-white-A700 w-[57%] sm:w-full"
                            size="txtOpenSansRegular18"
                          >
                            Años de experiencia
                          </Text>
                        </div>
                        <Text
                          className="absolute inset-x-[0] mx-auto md:text-5xl sm:text-[42px] text-[56px] text-center text-white-A700 top-[13%] w-max"
                          size="txtOpenSansBold56"
                        >
                          10
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[60px] w-[58%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="bg-clip-text bg-gradient1  ml-1 md:ml-[0] text-2xl md:text-[22px] text-shadow-ts text-transparent sm:text-xl"
                          size="txtLucidaSansTypewriterBold24"
                        >
                          Sobre Nosotros
                        </Text>
                        <Text
                          className="bg-clip-text bg-gradient3  mt-[62px] sm:text-4xl md:text-[38px] text-[40px] text-shadow-ts text-transparent"
                          size="txtLucidaSansTypewriterBold40"
                        >
                          Años de experiencia en los servicios TI
                        </Text>
                        <Text
                          className="leading-[30.00px] md:ml-[0] ml-[5px] mt-[38px] text-base text-blue_gray-700"
                          size="txtManropeRegular16"
                        >
                          <>
                            Nuestra filosofía está centrada en el cliente,
                            nuestro conocimiento
                            <br />
                            para estructurar, desarrollar e implementar
                            diferentes productos y<br />
                            servicios a las necesidades particulares de quienes
                            apoyamos, así
                            <br />
                            como nuestra red de socios estrátegicos, son
                            caracteristicas que nos
                            <br />
                            han llevado hacia convertirnos en el principal
                            aliado en tecnología de
                            <br />
                            nuestros clientes.
                          </>
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-start mt-[15px] w-[72%] md:w-full">
                        <div className="bg-white-A700 flex flex-row gap-[18px] items-center justify-end p-1.5 rounded-[20px] shadow-bs w-[49%] sm:w-full">
                          <Img
                            className="h-[59px] md:h-auto my-6 object-cover w-[22%]"
                            src="images/img_features3png.png"
                            alt="features3png"
                          />
                          <Text
                            className="bg-clip-text bg-gradient4  text-2xl md:text-[22px] text-transparent sm:text-xl"
                            size="txtOpenSansBold24"
                          >
                            Confiabilidad
                          </Text>
                        </div>
                        <div className="bg-white-A700 flex flex-row gap-5 items-center justify-start p-[21px] sm:px-5 rounded-[20px] shadow-bs w-[49%] sm:w-full">
                          <Img
                            className="h-[72px] md:h-auto my-1 object-cover w-[27%]"
                            src="images/img_features1png.png"
                            alt="features1png"
                          />
                          <Text
                            className="bg-clip-text bg-gradient3  text-2xl md:text-[22px] text-transparent sm:text-xl"
                            size="txtOpenSansBold24"
                          >
                            Calidad
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-extrabold leading-[normal] min-w-[260px] md:ml-[0] ml-[5px] mt-11 shadow-bs text-center text-lg tracking-[0.50px]"
                        shape="round"
                        size="md"
                      >
                        Ver más sobre nosotros
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[43px] pb-4 pl-4 w-[85%] md:w-full">
                  <div className="flex flex-col gap-5 items-center justify-start">
                    <Text
                      className="bg-clip-text bg-gradient5  text-2xl md:text-[22px] text-center text-shadow-ts text-transparent sm:text-xl"
                      size="txtLucidaSansTypewriterBold24"
                    >
                      Servicios Destacados
                    </Text>
                    <Text
                      className="leading-[30.00px] text-base text-blue_gray-700 text-center w-full"
                      size="txtManropeRegular16"
                    >
                      Optimiza tu empresa con nuestras soluciones avanzadas en
                      TI. Desde desarrollo de software hasta infraestructuras
                      tecnológicas, nuestro equipo de expertos impulsa tu
                      negocio con resultados tangibles y sostenibles.
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[61px] w-full">
                    <div className="flex flex-col md:gap-10 gap-[61px] items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="h-[325px] relative w-[29%] md:w-full">
                          <div className="bg-white-A700 h-[325px] m-auto rounded-[162px] shadow-bs w-full"></div>
                          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[15%] w-[74%]">
                            <Img
                              className="h-[88px] md:h-auto object-cover w-1/2 sm:w-full"
                              src="images/img_12.png"
                              alt="Twelve"
                            />
                            <Text
                              className="bg-clip-text bg-gradient6  mt-4 text-2xl md:text-[22px] text-center text-transparent sm:text-xl"
                              size="txtOpenSansBold24"
                            >
                              Consultoría especializada
                            </Text>
                            <Text
                              className="leading-[150.00%] mt-[33px] text-blue_gray-200 text-center text-lg w-[92%] sm:w-full"
                              size="txtOpenSansRegular18Bluegray200"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex sm:flex-1 flex-col gap-[30px] h-[387px] sm:h-auto items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-[193px] shadow-bs w-[387px] sm:w-full">
                          <Img
                            className="h-[94px] md:h-auto mt-[17px] object-cover w-[37%] sm:w-full"
                            src="images/img_33.png"
                            alt="ThirtyThree"
                          />
                          <Text
                            className="bg-clip-text bg-gradient6  leading-[32.00px] text-2xl md:text-[22px] text-center text-transparent sm:text-xl"
                            size="txtOpenSansBold24"
                          >
                            <>
                              Cableado <br />
                              estructurado
                            </>
                          </Text>
                          <Text
                            className="leading-[150.00%] mb-[26px] text-blue_gray-200 text-center text-lg w-[91%] sm:w-full"
                            size="txtOpenSansRegular18Bluegray200"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </Text>
                        </div>
                        <div className="h-[325px] relative w-[29%] md:w-full">
                          <div className="bg-white-A700 h-[325px] m-auto rounded-[162px] shadow-bs w-full"></div>
                          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[15%] w-[74%]">
                            <Img
                              className="h-[92px] md:h-auto object-cover w-[55%] sm:w-full"
                              src="images/img_24.png"
                              alt="TwentyFour"
                            />
                            <Text
                              className="bg-clip-text bg-gradient7  leading-[32.00px] mt-[13px] text-2xl md:text-[22px] text-center text-transparent sm:text-xl"
                              size="txtOpenSansBold24"
                            >
                              <>
                                Ventas <br />
                                comerciales
                              </>
                            </Text>
                            <Text
                              className="leading-[150.00%] mt-[33px] text-blue_gray-200 text-center text-lg w-[92%] sm:w-full"
                              size="txtOpenSansRegular18Bluegray200"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <PagerIndicator
                        className="flex h-2.5 justify-center w-[172px]"
                        count={10}
                        activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-green-A400_02 w-2.5"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-gray-300 w-2.5"
                        selectedWrapperCss="inline-block md:ml-[0] mx-[4.00px] sm:ml-[0]"
                        unselectedWrapperCss="inline-block md:ml-[0] mx-[4.00px] sm:ml-[0]"
                      />
                    </div>
                  </div>
                  <div className="bg-green-A400 flex flex-col font-lucidasanstypewriter items-end justify-start mb-[23px] mt-[46px] p-[9px] rounded-[30px] shadow-bs">
                    <Text
                      className="leading-[54.00px] mr-[23px] text-center text-shadow-ts text-white-A700 text-xl w-[76%] sm:w-full"
                      size="txtLucidaSansTypewriterBold20"
                    >
                      Ver más servicos
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gradient8  flex flex-col font-lucidasanstypewriter justify-start mt-[57px] md:pl-10 sm:pl-5 pl-[47px] py-[47px] w-full">
                <Text
                  className="md:ml-[0] ml-[409px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                  size="txtLucidaSansTypewriterBold24WhiteA700"
                >
                  Alcance de nuestros servicios
                </Text>
                <div className="font-manrope h-[576px] md:h-[613px] mb-10 md:ml-[0] ml-[72px] mt-1 relative w-[95%] md:w-full">
                  <div className="absolute md:h-[569px] h-[572px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute h-[569px] inset-[0] justify-center m-auto w-full">
                      <Text
                        className="absolute leading-[30.00px] left-[0] text-base text-white-A700 top-[5%] w-[45%] sm:w-full"
                        size="txtManropeRegular16WhiteA700"
                      >
                        En la actualidad, nos enorgullece contar con un equipo
                        de profesionales altamente capacitados, preparados para
                        atender una amplia gama de requerimientos y situaciones
                        que puedan surgir. Estos estados no solo representan
                        nuestros puntos fuertes de operación, sino que también
                        nos brindan la oportunidad de expansión y cobertura de
                        nuestros servicios a Estados vecinos.
                      </Text>
                      <div className="absolute h-[569px] inset-y-[0] my-auto right-[0] w-[71%] md:w-full">
                        <Img
                          className="h-[569px] m-auto object-cover w-full"
                          src="images/img_mapa.png"
                          alt="mapa"
                        />
                        <div className="absolute bottom-[27%] flex flex-col items-center justify-start right-[6%] w-[42%]">
                          <div className="flex flex-col justify-start w-full">
                            <Img
                              className="h-[18px] md:h-auto ml-14 md:ml-[0] object-cover w-[4%]"
                              src="images/img_diseosinttulo43.png"
                              alt="diseosinttuloFortyThree"
                            />
                            <div className="flex flex-row items-start justify-start mt-3 w-[39%] md:w-full">
                              <Img
                                className="h-[18px] md:h-auto my-[17px] object-cover w-[9%]"
                                src="images/img_diseosinttulo43.png"
                                alt="diseosinttuloFortyThree_One"
                              />
                              <Img
                                className="h-[18px] md:h-auto mb-[35px] ml-[94px] object-cover w-[9%]"
                                src="images/img_diseosinttulo43.png"
                                alt="diseosinttuloFortyThree_Two"
                              />
                              <Img
                                className="h-[18px] md:h-auto ml-[15px] mt-[35px] object-cover w-[9%]"
                                src="images/img_diseosinttulo43.png"
                                alt="diseosinttuloFortyThree_Three"
                              />
                            </div>
                            <Img
                              className="h-[18px] md:h-auto md:ml-[0] ml-[38px] mt-[5px] object-cover w-[4%]"
                              src="images/img_diseosinttulo43.png"
                              alt="diseosinttuloFortyThree_Four"
                            />
                            <div className="flex flex-row gap-[33px] items-start justify-start md:ml-[0] ml-[51px] mt-[5px] w-[16%] md:w-full">
                              <Img
                                className="h-[18px] md:h-auto mt-[9px] object-cover w-[23%]"
                                src="images/img_diseosinttulo43.png"
                                alt="diseosinttuloFortyThree_Five"
                              />
                              <Img
                                className="h-[18px] md:h-auto mb-[9px] object-cover w-[23%]"
                                src="images/img_diseosinttulo43.png"
                                alt="diseosinttuloFortyThree_Six"
                              />
                            </div>
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[7px] mx-auto w-[91%] md:w-full">
                              <Img
                                className="h-[18px] md:h-auto sm:mt-0 mt-3 object-cover w-[4%] sm:w-full"
                                src="images/img_diseosinttulo43.png"
                                alt="diseosinttuloFortyThree_Seven"
                              />
                              <Img
                                className="h-[18px] md:h-auto mb-[9px] ml-12 sm:ml-[0] sm:mt-0 mt-[3px] object-cover w-[4%] sm:w-full"
                                src="images/img_diseosinttulo43.png"
                                alt="diseosinttuloFortyThree_Eight"
                              />
                              <Img
                                className="h-[18px] md:h-auto mb-3 sm:ml-[0] ml-[18px] object-cover w-[4%] sm:w-full"
                                src="images/img_diseosinttulo43.png"
                                alt="diseosinttuloFortyThree_Nine"
                              />
                              <Img
                                className="h-[18px] md:h-auto mb-3 sm:ml-[0] ml-[228px] object-cover w-[4%] sm:w-full"
                                src="images/img_diseosinttulo43.png"
                                alt="diseosinttuloFortyThree_Ten"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-end md:ml-[0] ml-[62px] mt-[3px] w-[84%] md:w-full">
                              <Img
                                className="h-[18px] md:h-auto mt-[9px] object-cover w-[5%]"
                                src="images/img_diseosinttulo43.png"
                                alt="diseosinttuloFortyThree_Eleven"
                              />
                              <Img
                                className="h-[18px] md:h-auto ml-[248px] mt-[9px] object-cover w-[5%]"
                                src="images/img_diseosinttulo43.png"
                                alt="diseosinttuloFortyThree_Twelve"
                              />
                              <Img
                                className="h-[18px] md:h-auto mb-[9px] ml-[34px] object-cover w-[5%]"
                                src="images/img_diseosinttulo43.png"
                                alt="diseosinttuloFortyThree_Thirteen"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[2%] w-[30%]">
                      <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-[94%] md:w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtManropeRegular16WhiteA700"
                          >
                            Aguascalientes
                          </Text>
                          <Text
                            className="text-base text-white-A700"
                            size="txtManropeRegular16WhiteA700"
                          >
                            Nuevo León
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between w-[92%] md:w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtManropeRegular16WhiteA700"
                          >
                            Campeche
                          </Text>
                          <Text
                            className="text-base text-white-A700"
                            size="txtManropeRegular16WhiteA700"
                          >
                            Querétaro
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtManropeRegular16WhiteA700"
                          >
                            Coahuila
                          </Text>
                          <Text
                            className="text-base text-white-A700"
                            size="txtManropeRegular16WhiteA700"
                          >
                            Quintana Roo
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtManropeRegular16WhiteA700"
                          >
                            Durango
                          </Text>
                          <Text
                            className="text-base text-white-A700"
                            size="txtManropeRegular16WhiteA700"
                          >
                            San Luis Potosí
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between w-[93%] md:w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtManropeRegular16WhiteA700"
                          >
                            Guanajuato
                          </Text>
                          <Text
                            className="text-base text-white-A700"
                            size="txtManropeRegular16WhiteA700"
                          >
                            Tamaulipas
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[88%] md:w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtManropeRegular16WhiteA700"
                          >
                            Jalisco
                          </Text>
                          <Text
                            className="text-base text-white-A700"
                            size="txtManropeRegular16WhiteA700"
                          >
                            Yucatán
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between w-[92%] md:w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtManropeRegular16WhiteA700"
                          >
                            Michoacan
                          </Text>
                          <Text
                            className="text-base text-white-A700"
                            size="txtManropeRegular16WhiteA700"
                          >
                            Zacatecas
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[24%]">
                    <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Img
                          className="h-[29px] md:h-auto object-cover"
                          src="images/img_diseosinttulo43.png"
                          alt="diseosinttuloFortyThree_Fourteen"
                        />
                        <Img
                          className="h-[29px] md:h-auto object-cover"
                          src="images/img_diseosinttulo43.png"
                          alt="diseosinttuloFortyThree_Fifteen"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Img
                          className="h-[29px] md:h-auto object-cover"
                          src="images/img_diseosinttulo43.png"
                          alt="diseosinttuloFortyThree_Sixteen"
                        />
                        <Img
                          className="h-[29px] md:h-auto object-cover"
                          src="images/img_diseosinttulo43.png"
                          alt="diseosinttuloFortyThree_Seventeen"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Img
                          className="h-[29px] md:h-auto object-cover"
                          src="images/img_diseosinttulo43.png"
                          alt="diseosinttuloFortyThree_Eighteen"
                        />
                        <Img
                          className="h-[29px] md:h-auto object-cover"
                          src="images/img_diseosinttulo43.png"
                          alt="diseosinttuloFortyThree_Nineteen"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Img
                          className="h-[29px] md:h-auto object-cover"
                          src="images/img_diseosinttulo43.png"
                          alt="diseosinttuloFortyThree_Twenty"
                        />
                        <Img
                          className="h-[29px] md:h-auto object-cover"
                          src="images/img_diseosinttulo43.png"
                          alt="diseosinttuloFortyThree_TwentyOne"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Img
                          className="h-[29px] md:h-auto object-cover"
                          src="images/img_diseosinttulo43.png"
                          alt="diseosinttuloFortyThree_TwentyTwo"
                        />
                        <Img
                          className="h-[29px] md:h-auto object-cover"
                          src="images/img_diseosinttulo43.png"
                          alt="diseosinttuloFortyThree_TwentyThree"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Img
                          className="h-[29px] md:h-auto object-cover"
                          src="images/img_diseosinttulo43.png"
                          alt="diseosinttuloFortyThree_TwentyFour"
                        />
                        <Img
                          className="h-[29px] md:h-auto object-cover"
                          src="images/img_diseosinttulo43.png"
                          alt="diseosinttuloFortyThree_TwentyFive"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Img
                          className="h-[29px] md:h-auto object-cover"
                          src="images/img_diseosinttulo43.png"
                          alt="diseosinttuloFortyThree_TwentySix"
                        />
                        <Img
                          className="h-[29px] md:h-auto object-cover"
                          src="images/img_diseosinttulo43.png"
                          alt="diseosinttuloFortyThree_TwentySeven"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-opensans items-center justify-start md:ml-[0] ml-[102px] mt-[149px] p-[21px] sm:px-5 w-[84%] md:w-full">
                <div className="flex md:flex-col flex-row gap-10 items-start justify-start mb-[30px] w-[95%] md:w-full">
                  <div className="md:h-[536px] h-[577px] mb-[19px] relative w-[52%] md:w-full">
                    <Img
                      className="absolute h-[517px] object-cover right-[0] rounded-[30px] top-[0] w-[83%]"
                      src="images/img_imagen_517x468.png"
                      alt="imagen_One"
                    />
                    <div className="absolute bg-gradient9  bottom-[0] flex flex-col gap-[19px] h-60 items-center justify-end left-[0] p-[22px] sm:px-5 rounded-[20px] shadow-bs1 w-60">
                      <div className="h-[100px] md:h-[109px] mt-[9px] relative w-[100px]">
                        <Text
                          className="m-auto text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                          size="txtOpenSansBold24WhiteA700"
                        >
                          100%
                        </Text>
                        <div className="absolute h-[100px] inset-[0] justify-center m-auto outline outline-[5px] outline-white-A700 rounded-[50%] w-[100px]"></div>
                      </div>
                      <Text
                        className="leading-[34.00px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-[61%] sm:w-full"
                        size="txtOpenSansBold24WhiteA700"
                      >
                        Casos de éxito
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-lucidasanstypewriter gap-8 items-start justify-start md:mt-0 mt-[41px] w-[45%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="bg-clip-text bg-gradient6  text-2xl md:text-[22px] text-transparent sm:text-xl"
                          size="txtLucidaSansTypewriterBold24Indigo800"
                        >
                          Lorem ipsum
                        </Text>
                        <Text
                          className="mt-3 text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-[84%] sm:w-full"
                          size="txtLucidaSansTypewriterBold48"
                        >
                          Nuestras soluciones
                        </Text>
                        <Text
                          className="leading-[150.00%] ml-0.5 md:ml-[0] mt-[37px] text-gray-500 text-lg w-full"
                          size="txtOpenSansRegular18Gray500"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore.
                        </Text>
                        <div className="flex sm:flex-col flex-row font-opensans gap-5 items-start justify-start mt-10 w-full">
                          <Button
                            className="flex h-[30px] items-center justify-center mb-[52px] w-[30px]"
                            shape="circle"
                            color="green_A400_02"
                          >
                            <Img
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          </Button>
                          <Text
                            className="sm:flex-1 leading-[150.00%] text-gray-500 text-lg w-[90%] sm:w-full"
                            size="txtOpenSansRegular18Gray500"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore.
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row font-opensans gap-5 items-start justify-start mt-[13px] w-full">
                          <Button
                            className="flex h-[30px] items-center justify-center mb-[52px] w-[30px]"
                            shape="circle"
                            color="green_A400_02"
                          >
                            <Img
                              src="images/img_checkmark_green_a400_02.svg"
                              alt="checkmark_One"
                            />
                          </Button>
                          <Text
                            className="sm:flex-1 leading-[150.00%] text-gray-500 text-lg w-[90%] sm:w-full"
                            size="txtOpenSansRegular18Gray500"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[183px] text-center text-lg tracking-[0.50px]"
                      shape="round"
                      size="md"
                    >
                      Ver más
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex items-center justify-center mt-[-166px] mx-auto w-full z-[1]">
            <div className="md:h-[1183px] h-[772px] sm:h-[919px] relative w-full">
              <div className="absolute gap-[41px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-x-[0] items-center justify-center mx-auto top-[0] w-1/2">
                <ul className="bg-gradient6  flex flex-col items-center justify-start p-[11px] rounded-[37px] w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-lg text-white-A700">
                      <Text size="txtOpenSansRomanBold18">Facebook</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-lg text-white-A700">
                      <Text size="txtOpenSansRomanLight18">Fratech</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <Img
                        className="h-[145px] md:h-auto mb-[65px] mt-[3px] object-cover rounded-[20px]"
                        src="images/img_qrcode11.png"
                        alt="qrcodeEleven"
                      />
                    </a>
                  </li>
                </ul>
                <div className="bg-gradient6  flex flex-col items-center justify-start p-3.5 rounded-[37px] w-full">
                  <div className="md:h-[21px] h-[43px] relative w-[56%]">
                    <Text
                      className="absolute bottom-[0] inset-x-[0] mx-auto text-lg text-white-A700 w-max"
                      size="txtOpenSansRomanLight18"
                    >
                      @fratech.co
                    </Text>
                    <Text
                      className="absolute left-[0] text-lg text-white-A700 top-[0]"
                      size="txtOpenSansRomanBold18"
                    >
                      Instagram
                    </Text>
                  </div>
                  <Img
                    className="h-[145px] md:h-auto mb-[62px] mt-0.5 object-cover rounded-[20px] w-[145px]"
                    src="images/img_qrcode1.png"
                    alt="qrcodeOne"
                  />
                </div>
                <ul className="bg-gradient5  flex flex-col items-center justify-start p-[11px] rounded-[37px] w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-lg text-white-A700">
                      <Text size="txtOpenSansRomanBold18">LinkedIn</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-lg text-white-A700">
                      <Text size="txtOpenSansRomanLight18">Fratech</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <Img
                        className="h-[145px] md:h-auto mb-[65px] mt-[3px] object-cover rounded-[20px]"
                        src="images/img_qrcode21.png"
                        alt="qrcodeTwentyOne"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="absolute bg-gradient10  bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[50px] md:px-10 sm:px-5 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[90%] md:w-full">
                  <ul className="flex flex-col font-manrope items-start justify-start w-[58%] md:w-full common-column-list">
                    <li>
                      <a href="javascript:">
                        <Img
                          className="h-[95px] md:h-auto object-cover"
                          src="images/img_logo.png"
                          alt="logo_One"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-col font-opensans items-center justify-start mt-[29px]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[0.50px] w-[87%] sm:w-full"
                              size="txtOpenSansRomanExtraBold36"
                            >
                              Soluciones en infraestructura
                            </Text>
                            <div className="flex sm:flex-col flex-row font-manrope gap-4 items-start justify-start mt-[38px] w-full">
                              <Img
                                className="h-[17px]"
                                src="images/img_linkedin.svg"
                                alt="linkedin_One"
                              />
                              <Text
                                className="text-base text-white-A700"
                                size="txtManropeSemiBold16"
                              >
                                Miguel Hidalgo y Costilla #2404 piso 64,
                                Obispado 64060, Monterrey, N.L.
                              </Text>
                            </div>
                            <div className="flex flex-row font-manrope gap-2.5 items-start justify-start mt-3.5 w-[32%] md:w-full">
                              <Img
                                className="h-[21px]"
                                src="images/img_mail.svg"
                                alt="mail"
                              />
                              <Text
                                className="text-base text-white-A700"
                                size="txtManropeSemiBold16"
                              >
                                contact@fratech.co
                              </Text>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row items-start justify-start ml-3.5 md:ml-[0] mt-14">
                          <Img
                            className="h-[21px]"
                            src="images/img_facebook.svg"
                            alt="facebook_One"
                          />
                          <Img
                            className="h-[21px] ml-10"
                            src="images/img_instagram.svg"
                            alt="instagram_One"
                          />
                          <Img
                            className="h-[21px] ml-[37px]"
                            src="images/img_linkedin_white_a700.svg"
                            alt="linkedin_Two"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="md:ml-[0] ml-[513px] mt-[19px] text-sm text-white-A700"
                      >
                        <Text size="txtManropeRegular14">
                          © Copyrights 2022 Fratech
                        </Text>
                      </a>
                    </li>
                  </ul>
                  <div className="flex flex-col font-opensans gap-[26px] items-start justify-start md:ml-[0] ml-[135px] md:mt-0 mt-[51px] w-[13%] md:w-full">
                    <Text
                      className="text-green-A400_02 text-xl tracking-[0.50px]"
                      size="txtOpenSansBold20GreenA40002"
                    >
                      Menu
                    </Text>
                    <ul className="flex flex-col gap-9 items-start justify-start w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-lg text-white-A700"
                        >
                          <Text size="txtOpenSansRomanSemiBold18WhiteA700">
                            Inicio
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-lg text-white-A700"
                        >
                          <Text size="txtOpenSansRomanSemiBold18WhiteA700">
                            Conoce a Fratech
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-lg text-white-A700"
                        >
                          <Text size="txtOpenSansRomanSemiBold18WhiteA700">
                            Casos de éxito
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-lg text-white-A700"
                        >
                          <Text size="txtOpenSansRomanSemiBold18WhiteA700">
                            Servicios
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Button
                    className="cursor-pointer font-opensans font-semibold mb-[296px] min-w-[160px] md:ml-[0] ml-[66px] md:mt-0 mt-[94px] rounded-[24px] text-center text-lg"
                    size="sm"
                  >
                    Contacto
                  </Button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default DiseoThreePage;
