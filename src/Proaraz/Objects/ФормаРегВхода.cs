﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proaraz
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Форма рег входа.
    /// </summary>
    // *** Start programmer edit section *** (ФормаРегВхода CustomAttributes)

    // *** End programmer edit section *** (ФормаРегВхода CustomAttributes)
    [AutoAltered()]
    [Caption("Форма рег входа")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ФормаРегВходаE", new string[] {
            "Дата as \'Дата\'",
            "Комната as \'Комната\'",
            "Комната.Номер as \'Номер\'"}, Hidden=new string[] {
            "Комната.Номер"})]
    [AssociatedDetailViewAttribute("ФормаРегВходаE", "ТЧРегВхода", "ТЧРегВходаE", true, "", "Т ч рег входа", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ФормаРегВходаE", "Комната", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Номер")]
    [View("ФормаРегВходаL", new string[] {
            "Дата as \'Дата\'",
            "Комната.Номер as \'Номер\'"})]
    public class ФормаРегВхода : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private IIS.Proaraz.Комната fКомната;
        
        private IIS.Proaraz.DetailArrayOfТЧРегВхода fТЧРегВхода;
        
        // *** Start programmer edit section *** (ФормаРегВхода CustomMembers)

        // *** End programmer edit section *** (ФормаРегВхода CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ФормаРегВхода.Дата CustomAttributes)

        // *** End programmer edit section *** (ФормаРегВхода.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ФормаРегВхода.Дата Get start)

                // *** End programmer edit section *** (ФормаРегВхода.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ФормаРегВхода.Дата Get end)

                // *** End programmer edit section *** (ФормаРегВхода.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормаРегВхода.Дата Set start)

                // *** End programmer edit section *** (ФормаРегВхода.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ФормаРегВхода.Дата Set end)

                // *** End programmer edit section *** (ФормаРегВхода.Дата Set end)
            }
        }
        
        /// <summary>
        /// Форма рег входа.
        /// </summary>
        // *** Start programmer edit section *** (ФормаРегВхода.Комната CustomAttributes)

        // *** End programmer edit section *** (ФормаРегВхода.Комната CustomAttributes)
        [PropertyStorage(new string[] {
                "Комната"})]
        [NotNull()]
        public virtual IIS.Proaraz.Комната Комната
        {
            get
            {
                // *** Start programmer edit section *** (ФормаРегВхода.Комната Get start)

                // *** End programmer edit section *** (ФормаРегВхода.Комната Get start)
                IIS.Proaraz.Комната result = this.fКомната;
                // *** Start programmer edit section *** (ФормаРегВхода.Комната Get end)

                // *** End programmer edit section *** (ФормаРегВхода.Комната Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормаРегВхода.Комната Set start)

                // *** End programmer edit section *** (ФормаРегВхода.Комната Set start)
                this.fКомната = value;
                // *** Start programmer edit section *** (ФормаРегВхода.Комната Set end)

                // *** End programmer edit section *** (ФормаРегВхода.Комната Set end)
            }
        }
        
        /// <summary>
        /// Форма рег входа.
        /// </summary>
        // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхода CustomAttributes)

        // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхода CustomAttributes)
        public virtual IIS.Proaraz.DetailArrayOfТЧРегВхода ТЧРегВхода
        {
            get
            {
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхода Get start)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхода Get start)
                if ((this.fТЧРегВхода == null))
                {
                    this.fТЧРегВхода = new IIS.Proaraz.DetailArrayOfТЧРегВхода(this);
                }
                IIS.Proaraz.DetailArrayOfТЧРегВхода result = this.fТЧРегВхода;
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхода Get end)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхода Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхода Set start)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхода Set start)
                this.fТЧРегВхода = value;
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхода Set end)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхода Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ФормаРегВходаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормаРегВходаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормаРегВходаE", typeof(IIS.Proaraz.ФормаРегВхода));
                }
            }
            
            /// <summary>
            /// "ФормаРегВходаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормаРегВходаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормаРегВходаL", typeof(IIS.Proaraz.ФормаРегВхода));
                }
            }
        }
    }
}
